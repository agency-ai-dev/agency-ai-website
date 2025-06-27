import * as React from "react"

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Agency AI</h2>
          <p className="opacity-70">© 2025 Agency AI. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/"
            className="text-white hover:text-teal-400 transition-colors no-underline"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-white hover:text-teal-400 transition-colors no-underline"
          >
            About
          </a>
          <a
            href="/contactus"
            className="text-white hover:text-teal-400 transition-colors no-underline"
          >
            Contact
          </a>
          <a
            href="/pricing"
            className="text-white hover:text-teal-400 transition-colors no-underline"
          >
            Pricing
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
