import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./homestyles.css"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import FreeAudit from "../components/free-audit"

const IndexPage = () => {
  return (
    <div className="pdf-container">
      <Header />
      <section className="relative py-24 px-6 overflow-hidden min-h-[80vh] flex items-center pt-12">
        <div className="glow"></div>

        {/* Floating AI Elements */}
        <div className="absolute inset-0 z-5">
          <div
            className="floating-element"
            style={{
              position: "absolute",
              top: "15%",
              left: "10%",
              width: "60px",
              height: "60px",
              background: "rgba(123, 104, 238, 0.1)",
              borderRadius: "50%",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
          <div
            className="floating-element"
            style={{
              position: "absolute",
              top: "25%",
              right: "15%",
              width: "40px",
              height: "40px",
              background: "rgba(0, 230, 180, 0.1)",
              borderRadius: "50%",
              animation: "float 4s ease-in-out infinite 2s",
            }}
          ></div>
          <div
            className="floating-element"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "20%",
              width: "80px",
              height: "80px",
              background: "rgba(123, 104, 238, 0.05)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite 1s",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <i className="fas fa-robot text-purple-400 mr-2"></i>
            <span className="text-sm font-medium text-purple-300">
              AI-Powered Marketing
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center mb-2">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MARKETING AUTOMATION
            </span>
            <br />
            <span className="highlight-purple text-4xl md:text-5xl mt-2 block">
              THAT FEELS LIKE AN IN-HOUSE TEAM
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Run multi-channel ads + automated email campaigns powered by
            <span className="highlight"> AGEN.AI</span> - your all-in-one
            marketing solution within Shopify.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              className="group relative px-8 py-4 rounded-xl font-semibold shadow-2xl text-white text-lg overflow-hidden"
              style={{ backgroundColor: "#00e6b4" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #00d4a3, #00b89a)",
                }}
              ></div>
              <Link
                to="/comingsoon"
                className="relative decoration-none text-gray-900 no-underline flex items-center justify-center"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Free Trial
              </Link>
            </button>
          </div>
        </div>

        {/* Add floating animation keyframes */}
        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
        `}</style>
      </section>

      <FreeAudit />

      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              SEAMLESS INTEGRATIONS{" "}
              <span className="highlight-purple">BUILT FOR SHOPIFY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All the tools you need to grow your e-commerce business,
              integrated into one powerful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-magic text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Fast Full Service Setup
              </h3>
              <p className="text-gray-300 mb-6">
                Connect your store, complete a quick onboarding questionnaire.
                AGEN-AI handles the setup and launch of your ad campaigns.{" "}
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Multi-Channel Management
              </h3>
              <p className="text-gray-300 mb-6">
                Run ads across Meta and Google, send emails, all from one AI
                powered dashboard. Unify your messaging with the power of
                AGEN-AI.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-envelope text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Built-In Email Provider
              </h3>
              <p className="text-gray-300 mb-6">
                Send and automate email marketing directly within Agency. Use AI
                driven funnels to capture the business you’re losing out on.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users-cog text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Full-Stack Agency Experience
              </h3>
              <p className="text-gray-300 mb-6">
                Get the expertise of a full-service agency: campaign strategy,
                automation, and optimization. All without the overhead costs.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-pie text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Insightful Data Tracking
              </h3>
              <p className="text-gray-300 mb-6">
                Track campaign data, get insights and recommendations. See the
                performance of your campaigns in real-time dashboards.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-brain text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Leverage our Experience
              </h3>
              <p className="text-gray-300 mb-6">
                The team behind Agency has years of experience scaling
                e-commerce stores, building Shopify apps, and developing
                automated solutions.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              GROW YOUR BUSINESS <span className="highlight">FASTER</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cut costs, increase margins, scale effortlessly. Welcome to a new
              era in digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* <section id="referrals" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">MORE CHANNELS, <span className="highlight">MORE REFERRALS</span></h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Drive more referrals with Agency AI's unique range of invitation channels.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-user-plus text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-center mb-3">Refer a friend and get $10 off your next order</h3>
                                <form className="space-y-3 mt-6">
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" className="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" className="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button className="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>

                        <div className="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-share-alt text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-center mb-3">Sharing is caring! Refer a friend and get $15 off your next order.</h3>
                                <form className="space-y-3 mt-6">
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" className="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" className="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button className="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>

                        <div className="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-percentage text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-center mb-3">Give 15%, Get 15%</h3>
                                <p className="text-sm text-gray-300 text-center mb-4">Refer your friend, and they'll receive 15% off their first order. Plus, you'll get a dazzling 15% off your next purchase when they convert!</p>
                                <div className="flex justify-center space-x-2 mt-6">
                                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i className="fab fa-facebook-f text-gray-300"></i>
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i className="fab fa-twitter text-gray-300"></i>
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i className="fab fa-linkedin-in text-gray-300"></i>
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i className="fas fa-envelope text-gray-300"></i>
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i className="fab fa-whatsapp text-gray-300"></i>
                                    </button>
                                </div>
                                <button className="secondary-btn w-full py-2 rounded-lg text-white mt-4">Next</button>
                            </div>
                        </div>

                        <div className="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-heart text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-center mb-3">Share the love - refer a friend and get $10 off your next order.</h3>
                                <form className="space-y-3 mt-6">
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" className="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" className="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button className="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="primary-btn px-8 py-3 rounded-lg font-semibold shadow-lg text-lg">
                            Start Your Referral Program Today
                        </button>
                        <p className="text-gray-400 mt-4">No setup fees. Start generating referrals in minutes.</p>
                    </div>
                </div>
            </section> */}

      <section className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              WHAT OUR <span className="highlight-purple">CUSTOMERS SAY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied Shopify store owners who have
              transformed their marketing with Agency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="flex mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-300 mb-12">
                "Since implementing Agency AI, our ROAS has improved by 42%. The
                platform makes it so easy to manage campaigns across multiple
                channels, and the AI recommendations are spot on."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                  <span className="font-bold">SB</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah B.</h4>
                  <p className="text-sm text-gray-400 mb-1">
                    Fashion Boutique Owner
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="flex mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-300 mb-6">
                "The time savings alone are worth it. We used to spend 25+ hours
                a week managing our marketing campaigns. Now Agency AI handles
                most of it automatically, and our results are actually better!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                  <span className="font-bold">MK</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael K.</h4>
                  <p className="text-sm text-gray-400 mb-1">
                    Electronics Store Owner
                  </p>
                </div>
              </div>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="flex mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-300 mb-12">
                "The email marketing functionality alone is worth the
                investment. Our abandoned cart recovery rate has increased by
                35% since switching to Agency AI. The setup was incredibly
                simple too."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <span className="font-bold">JT</span>
                </div>
                <div>
                  <h4 className="font-bold">Jessica T.</h4>
                  <p className="text-sm text-gray-400 mb-1">
                    Beauty Brand Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-xl p-10 shadow-2xl border border-purple-500 border-opacity-30 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="highlight">Transform</span> Your
              Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful Shopify stores already using Agency AI
              to automate their marketing and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="primary-btn px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">
                <Link
                  to="/comingsoon"
                  className="decoration-none text-gray-900 no-underline"
                >
                  Start 14-Day Free Trial
                </Link>
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg w-[100%] sm:w-[275px]">
                Contact Us
              </button>
            </div>
            <p className="text-gray-400 mt-6 !min-w-[100%]">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* <footer className="py-12 px-6 bg-gradient-dark border-t border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-6">
                                <span className="text-2xl font-bold">AGENCY<span className="highlight-purple">.AI</span></span>
                            </div>
                            <p className="text-gray-400 mb-6">The all-in-one marketing automation platform for Shopify stores.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i className="fab fa-facebook-f text-gray-300"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i className="fab fa-twitter text-gray-300"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i className="fab fa-instagram text-gray-300"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i className="fab fa-linkedin-in text-gray-300"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Platform</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Resources</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2023 Agency AI. All rights reserved.</p>
                    </div>
                </div>
            </footer> */}
      <Footer />
    </div>
  )
}

export default IndexPage
