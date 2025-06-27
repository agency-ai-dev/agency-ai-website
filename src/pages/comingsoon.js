import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import agencyailogo from "./../images/agencyailogo.png"
import Header from "../components/header"
import Footer from "../components/footer"

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
                {" "}
                Amazing{" "}
              </span>
              is Coming
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're working hard to bring you the next evolution of AI-powered
              marketing automation. Get ready for something revolutionary.
            </p>
          </div>

          {/* Beta Access CTA */}
          <div className="mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-lg mx-auto border border-white border-opacity-20">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full mb-4">
                  <i className="fas fa-star text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Free Beta Access
                </h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Email us now to get{" "}
                  <span className="text-teal-400 font-semibold">
                    free beta access
                  </span>{" "}
                  and lock in a{" "}
                  <span className="text-purple-400 font-semibold">
                    lifetime discount
                  </span>{" "}
                  when we officially launch!
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-400 to-purple-600 p-0.5 rounded-xl mb-6">
                <div className="bg-gray-900 rounded-xl p-4 sm:p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 text-center sm:text-left">
                    What You Get:
                  </h4>
                  <ul className="space-y-3 sm:space-y-2">
                    <li className="flex items-center text-gray-300 text-sm sm:text-base">
                      <i className="fas fa-check text-teal-400 mr-3 flex-shrink-0"></i>
                      <span className="text-left">
                        Early access to all features
                      </span>
                    </li>
                    <li className="flex items-center text-gray-300 text-sm sm:text-base">
                      <i className="fas fa-check text-teal-400 mr-3 flex-shrink-0"></i>
                      <span className="text-left">
                        Direct feedback line to our development team
                      </span>
                    </li>
                    <li className="flex items-center text-gray-300 text-sm sm:text-base">
                      <i className="fas fa-check text-teal-400 mr-3 flex-shrink-0"></i>
                      <span className="text-left">
                        Lifetime discount on all plans
                      </span>
                    </li>
                    <li className="flex items-center text-gray-300 text-sm sm:text-base">
                      <i className="fas fa-check text-teal-400 mr-3 flex-shrink-0"></i>
                      <span className="text-left">
                        Priority support during beta
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contactus"
                  className="bg-gradient-to-r from-teal-400 to-purple-600 text-white px-4 py-4 rounded-lg font-semibold shadow-lg text-center no-underline hover:from-teal-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Email for Beta Access
                </a>
                <a
                  href="http://calendly.com/agency-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white border-opacity-30 bg-white text-black px-4 py-4 rounded-lg font-semibold shadow-lg text-center no-underline hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  Book a Demo
                </a>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">
              What's Coming
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-10">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Advanced AI
                </h4>
                <p className="text-gray-300 text-sm">
                  Next-generation AI algorithms for smarter marketing decisions
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-10">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Better Analytics
                </h4>
                <p className="text-gray-300 text-sm">
                  Deeper insights and more actionable data for your campaigns
                </p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-10">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-bolt text-white text-xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Faster Setup
                </h4>
                <p className="text-gray-300 text-sm">
                  Get up and running in minutes, not hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div> */}
    </div>
  )
}

export default ComingSoonPage
