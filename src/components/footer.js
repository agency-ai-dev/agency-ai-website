import * as React from "react"

const Footer = ({ waitlist }) => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl ml-4 md:ml-0 mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Agency AI</h2>
          <p className="opacity-70">© 2025 Agency AI. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/"
            className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
          >
            About
          </a>
          <a
            href="/blog"
            className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
          >
            Blog
          </a>
          <a
            href="/contactus"
            className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
          >
            Contact
          </a>
          {!waitlist && (
            <a
              href="/pricing"
              className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
            >
              Pricing
            </a>
          )}
          <a
            href="/privacy-policy"
            className="text-white hover:text-teal-400 transition-colors no-underline text-[.9rem]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
