import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import logo from '../assets/polygonnft.png'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto text-white">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="" className='w-[200px]' srcset="" />
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
  )
}

export default Header
