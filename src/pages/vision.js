import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./visionstyles.css"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import FreeAudit from "../components/free-audit"
import Pricing from "../components/pricing"
import laptopMobileImage from "../images/laptop-mobile-screengrab.png"

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
            <span className="text-[.75rem] md:text-sm font-medium text-purple-300">
              AI-Powered Marketing
            </span>
          </div>

          <h1 className="text-[2rem] md:text-6xl font-bold leading-tight text-center mb-2">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Complete <span className="highlight-purple">AI</span>
            </span>
            <span className="highlight-purple block">Growth Platform</span>
          </h1>

          <p className="mt-5 md:mt-8 text-lg md:text-2xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Powered by AGEN-AI, our proprietary intelligence that makes
            cross-channel marketing decisions like a top-tier agency. Unlike
            single-purpose apps, we orchestrate your entire growth strategy with
            unified intelligence trained on brand knowledge and ever changing
            industry best practices.
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
                See The Vision
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

      {/* <FreeAudit /> */}

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
                <i className="fas fa-user-clock text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Growth Teams Are Overwhelmed
              </h3>
              <p className="text-gray-300 mb-6">
                Growing businesses juggle dozens of marketing tools, analytics
                platforms, and optimization tasks. Teams spend more time
                managing systems than driving actual growth.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                See the Solution <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Fragmented Growth Stack
              </h3>
              <p className="text-gray-300 mb-6">
                Marketing, analytics, customer success, and growth teams work in
                silos with disconnected tools. Critical insights get lost
                between platforms, slowing decision-making.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Unify Growth <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-screen text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Manual Growth Management
              </h3>
              <p className="text-gray-300 mb-6">
                Growth teams manually monitor dozens of metrics across platforms
                instead of focusing on strategy and innovation. Reactive instead
                of proactive growth.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Automate Growth <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                AI Marketing Agency, Not Just Another App
              </h3>
              <p className="text-gray-300 mb-6">
                AGEN-AI makes strategic decisions across all your marketing
                channels simultaneously, just like a premium agency team. Get
                cross-channel optimization and strategic thinking at 90%+ cost
                savings vs traditional agencies.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                See Platform <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-simple text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Cross-Channel Growth Intelligence
              </h3>
              <p className="text-gray-300 mb-6">
                While other apps optimize in silos, AGEN-AI orchestrates
                campaigns across Meta, Google, email, SMS, and more. Strategic
                decision-making that considers your entire customer journey, not
                individual touchpoints.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                View Analytics <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="card rounded-xl p-6 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                24-Hour Growth Deployment
              </h3>
              <p className="text-gray-300 mb-6">
                From setup to full growth automation in 24 hours. AGEN-AI
                instantly applies learned knowledge from thousands of successful
                campaigns to optimize your entire funnel.
              </p>
              <a
                href="#"
                className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
              >
                Deploy Fast <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              GROW YOUR BUSINESS <span className="highlight">FASTER</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cut costs, increase margins, scale effortlessly. Welcome to a new
              era of scalable e-commerce growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">
                Get Your Free Marketing Audit
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                AGEN-AI will analyze your current marketing strategy and
                identify opportunities for improvement. Receive a custom report
                with actionable insights.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-lg">Ad Performance Analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-lg">Growth Channel Analysis</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-lg">
                    ROI & CAC Opportunity Assessment
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-[#131221]">
                <img
                  src={laptopMobileImage}
                  alt="Marketing audit dashboard showing analytics and performance metrics"
                  className="w-full h-auto bg-[#131221]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Agency AI Thinks Like an Agency, Not an App
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-brain text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Strategic Decision Making
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Unlike point solutions that optimize single channels, AGEN-AI
                makes cross-platform strategic decisions. It considers customer
                lifetime value, attribution across touchpoints, and budget
                allocation between channels — just like your ideal marketing
                agency.
              </p>
            </div>

            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-network-wired text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Unified Campaign Orchestration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                While competitors offer fragmented tools, Agency AI orchestrates
                your entire marketing ecosystem. One intelligence making
                informed decisions across Meta ads, email sequences, SMS
                campaigns, and customer retention — creating cohesive growth
                strategies instead of disconnected tactics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="highlight-purple">
                Beyond Marketing Automation
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Current Reality: Meta Advertising Foundation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We're launching with Meta advertising that thinks strategically
                about your entire funnel, not just ad optimization. AGEN-AI
                considers customer lifetime value, retention, and cross-channel
                attribution from day one.
              </p>
            </div>

            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chess-king text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Platform Vision: Complete Agency Intelligence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our roadmap expands this strategic thinking across all growth
                channels. AGEN-AI will orchestrate email, SMS, social, paid ads,
                and customer success as one unified growth strategy — replacing
                entire agency teams with intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Massive Market,{" "}
              <span className="highlight-purple">Ready for Disruption</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                SMB + Mid-Market Ecommerce Opportunity
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Agency AI targets a $320.7B total addressable market spanning
                agency services and DIY marketing tools. With 35 million
                ecommerce stores projected by 2030, the demand for unified,
                intelligent growth automation will only accelerate.
              </p>
            </div>

            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-trophy text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Advantage</h3>
              <p className="text-gray-300 leading-relaxed">
                Agency AI captures value across this entire fragmented ecosystem
                with 90%+ cost savings vs traditional Agency solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="highlight-purple">Why Agency AI Wins</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-brain text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Proprietary Intelligence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Continuously trained on industry best practices and real
                campaign data. Learns from every client interaction and campaign
                optimization. Adapts to industry changes and platform updates
                automatically.
              </p>
            </div>

            <div className="card rounded-xl p-8 hover:shadow-lg">
              <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-dollar-sign text-3xl feature-icon mr-0"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Massive Cost Savings</h3>
              <p className="text-gray-300 leading-relaxed">
                90%+ savings vs traditional agencies. Eliminates tool stack
                fragmentation (replace 5-10 apps with one platform). No hiring,
                training, or retention costs for growth teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-xl p-10 shadow-2xl border border-purple-500 border-opacity-30 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Partner with the{" "}
              <span className="highlight-purple">Future of Growth</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading investors backing AGEN-AI, the proprietary
              intelligence revolutionizing how businesses grow. Limited
              partnership opportunities available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                <a
                  target="_blank"
                  href="https://calendly.com/agency-demo"
                  className="relative text-gray-900 no-underline"
                >
                  Schedule Investor Demo
                </a>
              </button>
              <a
                href="/investment-deck.pdf"
                download="Agency AI Investment Pitch Deck.pdf"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg border border-gray-300 hover:bg-gray-50 transition-colors inline-block text-center no-underline"
              >
                Download Pitch Deck
              </a>
            </div>
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

      {/* Review Section */}
      {/* <section className="py-20 px-6 bg-gradient-dark">
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
      </section> */}

      {/* <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="card rounded-xl p-10 shadow-2xl border border-purple-500 border-opacity-30 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="highlight">Transform</span> Your
              Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get early access to the AI marketing revolution. Limited spots
              available for businesses ready to automate their Meta campaigns
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="primary-btn px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">
                <Link
                  to="/comingsoon"
                  className="decoration-none text-gray-900 no-underline"
                >
                  Get Early Access
                </Link>
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg w-[100%] sm:w-[275px]">
                <Link
                  to="/contactus"
                  className="decoration-none text-gray-900 no-underline"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      <Pricing />
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
