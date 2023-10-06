import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import logo from '../assets/polygonnft.png'
import { useState } from 'react'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [isOpen , setOpen] = useState(false)
  return (
    <>
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto text-white">
      <div onClick={() => setOpen(true)}>
        MENU
      </div>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="" className='sm:w-[200px] w-[150px]' srcset="" />
        </Link>
      </div>
      <ul
        className="md:flex-[0.5] hidden md:flex list-none justify-between
      item-center flex-initial"
      >
        <Link to="/" className="mx-4">
          Market
        </Link>
        <Link to="/collections" className="mx-4">
          Collections
        </Link>
        <Link to="/" className="mx-4">
          Artist
        </Link>
        <Link to="/" className="mx-4">
          Community
        </Link>
      </ul>

      {!connectedAccount ? (
        <button
          className="shadow-xl shadow-black bg-blue-500
          hover:bg-blue-700 md:text-sm sm:text-base p-2
          rounded-full"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black bg-blue-500
          hover:bg-blue-700 md:text-sm sm:text-base p-2
          rounded-full"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      )}
    </nav>
    {isOpen &&
    <div className='fixed top-0 bg-white w-[80%] h-full'>
    <ul
        className="relative md:hidden h-full w-full flex flex-col py-12 px-4 gap-6 list-none"
      >
        <Link to="/" className="mx-4">
          Market
        </Link>
        <Link to="/collections" className="mx-4">
          Collections
        </Link>
        <Link to="/" className="mx-4">
          Artist
        </Link>
        <Link to="/" className="mx-4">
          Community
        </Link>
        <div className='absolute font-semibold cursor-pointer right-0 top-0 z-10 w-[60px] pt-4 h-[30px]' onClick={() => setOpen(!isOpen)}>
          Close
        </div>
      </ul>
    </div>
    }
    </>
  )
}

export default Header
