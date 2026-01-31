import * as React from "react"
import agencyailogo from "./../images/agencyailogo.png"
import track from "../utils/analytics"

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header>
      <nav className="px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img
              src={agencyailogo}
              style={{ width: "120px", marginBottom: "0" }}
            />
          </a>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="/"
            className="text-white hover:text-teal-400 transition-colors no-underline"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-white hover:text-teal-400 transition-colors no-underline"
            onClick={() => track("nav_click", { nav_item: "about" })}
          >
            About
          </a>
          <a
            href="/blog"
            className="text-white hover:text-teal-400 transition-colors no-underline"
            onClick={() => track("nav_click", { nav_item: "blog" })}
          >
            Blog
          </a>
          <a
            href="/contactus"
            className="text-white hover:text-teal-400 transition-colors no-underline"
            onClick={() => track("nav_click", { nav_item: "contact" })}
          >
            Contact
          </a>
          <button className="primary-btn px-6 py-2 rounded-lg font-semibold shadow-lg">
            <a
              className="decoration-none text-gray-900 no-underline flex items-center"
              target="_blank"
              href="https://apps.shopify.com/agency-ai"
              onClick={() => track("nav_click", { nav_item: "download_beta" })}
            >
              <img
                src="/02 - Glyph/png/shopify_glyph_black.png"
                alt="Shopify"
                className="block w-7 h-7 mr-2 mb-0 object-contain self-center"
              />
              Download Beta
            </a>
          </button>
        </div>

        {/* Mobile navigation */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`absolute top-[75px] md:top-full left-0 w-full text-white flex flex-col space-y-4 px-6 z-50 md:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 py-6"
              : "opacity-0 -translate-y-4 py-0 pointer-events-none"
          }`}
          style={{
            background: "rgba(30, 30, 50, 0.95)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderTop: "none",
          }}
        >
          <a
            href="/"
            className="text-white hover:text-teal-400 no-underline transition-colors py-2"
          >
            Home
          </a>
          <a
            href="/aboutus"
            className="text-white hover:text-teal-400 no-underline transition-colors py-2"
            onClick={() => track("nav_click", { nav_item: "about" })}
          >
            About
          </a>
          <a
            href="/blog"
            className="text-white hover:text-teal-400 no-underline transition-colors py-2"
            onClick={() => track("nav_click", { nav_item: "blog" })}
          >
            Blog
          </a>
          <a
            href="/contactus"
            className="text-white hover:text-teal-400 no-underline transition-colors py-2"
            onClick={() => track("nav_click", { nav_item: "contact" })}
          >
            Contact
          </a>
          <button className="primary-btn px-4 py-2 rounded-lg font-semibold shadow mt-2">
            <a
              className="decoration-none text-gray-900 no-underline flex items-center justify-center"
              target="_blank"
              href="https://apps.shopify.com/agency-ai"
              onClick={() => track("nav_click", { nav_item: "download_beta" })}
            >
              <img
                src="/02 - Glyph/png/shopify_glyph_black.png"
                alt="Shopify"
                className="block w-7 h-7 mr-2 mb-0 object-contain self-center"
              />
              Download Beta
            </a>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
