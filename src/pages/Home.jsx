function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            MulaStar
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Your Gateway to Online Earning
          </p>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MulaStar provides TikTok and YouTube Videos, Ad clicks, Blogging, Trivia questions, 
              premium Forex tutorials, enlightening e-books, and competitive chess and draughts games 
              to boost your earnings.
            </p>
            <a 
              href="https://mula1star.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-md hover:shadow-lg"
            >
              Visit MulaStar Platform
            </a>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
              <div>🇰🇪 Available in Kenya</div>
              <div>🇺🇬 Available in Uganda</div>
              <div>🇷🇼 Available in Rwanda</div>
            </div>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            <p>Start earning online today with MulaStar Agencies</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose MulaStar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Multiple Income Streams</h3>
              <p className="text-gray-600">
                Earn through videos, ads, blogging, trivia, forex, and games
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Start</h3>
              <p className="text-gray-600">
                Sign up in minutes and start earning immediately
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">
                Earn on the go with our mobile-optimized platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users in Kenya, Uganda, and Rwanda earning online with MulaStar
          </p>
          <a 
            href="https://mula1star.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-500 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

