require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'polygon_mumbai',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    polygon_mumbai : {
      url: `https://polygon-mainnet.infura.io/v3/63c844b269a94e78b537f7aa207998c3`,
      accounts: ["b29e608191cad605ba911b873fc9c0b215fa0ae378a19d5fd26072cee38f107e"],
    },
    mumbai : {
      url: `https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78`,
      accounts: ["955dab2012c9d116ab13bbbc91d7f1b1c98f08d092aa7831a429c678f9a230bb"],
    }
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
}
