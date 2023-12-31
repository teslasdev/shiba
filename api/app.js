const cors = require('cors')
const fs = require('fs').promises
const express = require('express')
const fileupload = require('express-fileupload')
const { toWebp, toMetadata, uploadToIPFS } = require('./metadata')

const app = express()

app.use(cors({
  origin: '*'
}));
app.use(fileupload())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/process', async (req, res) => {
  try {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const image = req.files.image

    if (!name || !description || !price || !image) {
      return res
        .status(400)
        .send('name, description, price, and image must not be empty')
    }

    let params;
    await toWebp(image.data).then(async (data) => {
      const imageURL = await uploadToIPFS(data)

      params = {
        id: Date.now(),
        name,
        description,
        price,
        image: imageURL,
      }
    })

    const metadata = toMetadata(params)
    fs.writeFile('./token.json', JSON.stringify(metadata))
      .then(() => {
        fs.readFile('./token.json')
          .then(async (data) => {
            const metadataURI = await uploadToIPFS(data)
            console.log({ ...metadata, metadataURI })
            return res.status(200).json({ ...metadata, metadataURI })
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  } catch (error) {
    console.log('error')
    return res.status(400).json({ error })
  }
})

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Teslas!'
  })
})


app.listen(8080, () => console.log('Listing on port 9000...'))
