function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MulaStar</h3>
            <p className="text-gray-300">
              Your gateway to online earning. Earn money through TikTok, YouTube, blogging, 
              forex tutorials, and more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/how-to-earn" className="text-gray-300 hover:text-white">How to Earn</a></li>
              <li><a href="https://mula1star.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Regions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>🇰🇪 MulaStar Kenya</li>
              <li>🇺🇬 MulaStar Uganda</li>
              <li>🇷🇼 MulaStar Rwanda</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2026 MulaStar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

