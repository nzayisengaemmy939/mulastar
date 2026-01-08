function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About MulaStar</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is MulaStar?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            MulaStar is an online earning platform that allows users in Kenya, Uganda, and Rwanda to earn money 
            through various digital activities. We provide multiple income streams including TikTok and YouTube 
            video watching, ad clicks, blogging opportunities, trivia questions, premium Forex tutorials, 
            enlightening e-books, and competitive chess and draughts games.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How MulaStar Works</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">1.</span>
              <span>Sign up for a free MulaStar account</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">2.</span>
              <span>Choose from various earning activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">3.</span>
              <span>Complete tasks and earn points</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2">4.</span>
              <span>Withdraw your earnings directly to your mobile money account</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available in East Africa</h2>
          <p className="text-gray-700 mb-4">
            MulaStar is proudly serving users across East Africa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-3xl mb-2">🇰🇪</div>
              <h3 className="font-semibold">Mulastar Kenya</h3>
              <p className="text-sm text-gray-600">Earn online in Kenya</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-3xl mb-2">🇺🇬</div>
              <h3 className="font-semibold">Mulastar Uganda</h3>
              <p className="text-sm text-gray-600">Earn online in Uganda</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-3xl mb-2">🇷🇼</div>
              <h3 className="font-semibold">Mulastar Rwanda</h3>
              <p className="text-sm text-gray-600">Earn online in Rwanda</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://mula1star.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Join MulaStar Today
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

