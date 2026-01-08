import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MulaStar
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/how-to-earn" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              How to Earn
            </Link>
            <a 
              href="https://mula1star.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

