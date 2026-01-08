function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
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
  )
}

export default App
