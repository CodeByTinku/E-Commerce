import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4  text-white bg-linear-to-r from-indigo-500 to-purple-600">
        <div className="space-x-4 flex">
          <button className="bg-blue-500 px-3 py-1 rounded ml-[1300px]">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center bg-linear-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to My App</h2>
        <p className="mb-6">A creative platform for learning and fun</p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded shadow">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 text-black font-sans text-[18px]">
        <div className="p-6 bg-gray-100 rounded shadow">🚀 Fast</div>
        <div className="p-6 bg-gray-100 rounded shadow">🔒 Secure</div>
        <div className="p-6 bg-gray-100 rounded shadow">🎨 Creative UI</div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}