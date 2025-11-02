import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./visionstyles.css"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import FreeAudit from "../components/free-audit"
import Pricing from "../components/pricing"
import laptopMobileImage from "../images/laptop-mobile-screengrab.png"
import mobileChat from "../images/mobile-chat.png"
import competition from "../images/competition.png"
import track from "../utils/analytics"

const IndexPage = () => {
  return (
    <>
      <div className="pdf-container">
        <Header />
        <section className="relative px-6 pb-12 overflow-hidden flex items-center pt-10">
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
            {/* <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <i className="fas fa-robot text-purple-400 mr-2"></i>
            <span className="text-[.75rem] md:text-sm font-medium text-purple-300">
              Full-Funnel Growth on Autopilot
            </span>
          </div> */}

            <h1 className="text-[2.15rem] md:text-6xl font-bold leading-tight text-center mb-2">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                THE COMPLETE <span className="highlight-purple">AI</span>
              </span>
              <span className="highlight-purple block">GROWTH PLATFORM</span>
            </h1>

            <p className="text-center mt-5 md:mt-8 text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Agency AI automates the entire e-commerce growth funnel; from
              multichannel ads to conversion optimization, replacing agencies
              and app stacks with one intelligent platform.
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
                <a
                  target="_blank"
                  href="https://calendly.com/agency-demo/agency-ai-investor-brief"
                  className="relative decoration-none text-gray-900 no-underline flex items-center justify-center"
                >
                  Schedule Investor Demo
                </a>
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

        {/* <p className="text-sm text-gray-400 italic text-center max-w-4xl mb-0 mx-auto py-12 md:py-20">
        Led by founders with $25M+ in Shopify sales, four Shopify app exits, and
        Fortune 500 consulting experience, we combine proven e-commerce results
        with technical expertise to power the next-generation growth engine for
        online merchants.
      </p> */}

        {/* <FreeAudit /> */}

        {/* Promo Video Section */}
        <section className="py-12 md:py-20 px-6 pt-0">
          <div className="text-center">
            <h2 className="text-[1.65rem] md:text-[2rem] font-bold mb-4">
              THE E-COMMERCE <br className="block md:hidden" />{" "}
              <span className="highlight-purple">OWNER'S DILEMMA</span>
            </h2>
          </div>
          <div className="mx-auto text-center">
            <div className="rounded-xl overflow-hidden w-full md:w-[70%] m-auto">
              <div className="relative">
                <video
                  className="w-full h-full"
                  controls
                  onClick={() => track("video_clicked")}
                  data-fast-goal="video_clicked"
                >
                  <source
                    src="https://res.cloudinary.com/dn71ngylo/video/upload/v1759252335/Agency_Ai_video_1_xwubxm.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Credibility Section - Full Width Banner (outside container) */}
      <div className="w-full bg-gradient-to-r from-gray-900/40 via-gray-800/30 to-gray-900/40 border-t border-b border-gray-500/30">
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light m-auto max-w-[710px]">
              Led by founders with{" "}
              <span className="text-white font-medium">
                $25M+ in Shopify sales
              </span>
              , multiple apps which have served a combined{" "}
              <span className="text-white font-medium">20,000+ users</span>{" "}
              including{" "}
              <a
                href="https://apps.shopify.com/order-automator"
                target="_blank"
                className="text-[#988be7] hover:underline font-light no-underline"
              >
                Order Automator
              </a>
              , and{" "}
              <span className="text-white font-medium">
                Fortune 500 optimization expertise
              </span>
              , our team pairs proven e-commerce results with technical depth to
              build the next-generation growth engine.
            </p>
          </div>
        </section>
      </div>

      <div className="pdf-container">
        <section id="features" className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[1.65rem] font-bold mb-4">
                SEAMLESS INTEGRATIONS{" "}
                <span className="highlight-purple">BUILT FOR E-COMMERCE</span>
              </h2>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to scale an e-commerce business,
                integrated into one powerful platform.
              </p>
            </div>
            {/* Integration Icons Grid */}
            <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-[30rem] mx-auto mb-16">
              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fab fa-meta text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">Meta</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fab fa-google text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  Google
                </span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fab fa-shopify text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  Shopify
                </span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-brands fa-tiktok text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  TikTok
                </span>
              </div>

              <div className="flex flex-col items-center p-4 pb-0 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-filter-circle-dollar text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">CRO </span>
              </div>

              <div className="flex flex-col items-center p-4 pb-0 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-mobile-alt text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">SMS</span>
              </div>

              <div className="flex flex-col items-center p-4 pb-0 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-regular fa-envelope text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">Email</span>
              </div>

              <div className="flex flex-col items-center p-4 pb-0 rounded-xl transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-chart-line text-3xl text-[#7b68ee]"></i>
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  Analytics
                </span>
              </div>
            </div>

            {/* Problem Subsection */}
            <div className="text-center mb-12">
              <h3
                className="text-[1.65rem] font-bold mb-8"
                style={{ color: "#00e6b4" }}
              >
                The Barrier To{" "}
                <span className="whitespace-nowrap">E-commerce Growth</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
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
                  Marketing, analytics, customer success, and scaling efforts
                  operate in silos with disconnected tools. Critical insights
                  get lost between platforms, slowing decision-making.
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
                  Business owners manually monitor dozens of metrics across
                  platforms instead of focusing on strategy and innovation.
                  Reactive instead of proactive growth.
                </p>
                <a
                  href="#"
                  className="flex items-center text-primary font-medium hover:underline absolute bottom-[22px] highlight-purple"
                >
                  Automate Growth <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>

            {/* Solution Subsection */}
            <div className="text-center mb-12">
              <h3
                className="text-[1.65rem] font-bold mb-8"
                style={{ color: "#00e6b4" }}
              >
                The Agency AI Solution
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card rounded-xl p-6 hover:shadow-lg">
                <div className="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-rocket text-3xl feature-icon mr-0"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  AI Growth Agency, Not Just Another App
                </h3>
                <p className="text-gray-300 mb-6">
                  Our proprietary AI system makes strategic decisions across all
                  your growth channels simultaneously, acting as a premium
                  agency team. Get cross-channel optimization and strategic
                  thinking at 90%+ cost savings vs traditional agencies.
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
                  While other apps optimize in silos, Agency AI orchestrates
                  campaigns across Meta, Google, email, SMS, and your landing
                  pages. Strategic decision-making that considers your entire
                  customer journey, not individual touchpoints.
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
                  From onboarding to full growth automation in 24 hours. Our AI
                  engine instantly analyzes and applies proven data driven
                  optimization strategies across your entire funnel.
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

        {/* <section id="benefits" className="py-20 px-6 bg-gradient-dark">
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
      </section> */}

        {/* New AGEN-AI Section */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[1.65rem] font-bold mb-6">
                <span className="text-[#00e6b4]">AGENCY AI:</span> THE GROWTH
                INTELLIGENCE ADVANTAGE
              </h2>
              <p className="text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                See how our proprietary AI replaces expensive agency teams and
                eliminates tool fragmentation with unified, intelligent
                automation.
              </p>
            </div>
            <div className="flex justify-center">
              <div>
                <img
                  src={laptopMobileImage}
                  alt="AGEN-AI platform dashboard showing unified growth intelligence and automation"
                  className="w-full h-auto max-w-4xl mx-auto mb-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-[9rem] items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-center md:text-left text-[1.65rem] font-bold mb-6 ">
                  <span className="whitespace-nowrap">GROWTH MANAGEMENT</span>{" "}
                  <br></br>
                  <span className="highlight-purple">MADE SIMPLE</span>
                </h2>
                <p className="text-center md:text-left text-base md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Our AI system proactively monitors your campaigns and
                  identifies ways to improve performance. Approve optimizations
                  with one tap. Launch new campaigns with a simple message. It's
                  like having a CMO in your pocket.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-purple-500 mr-3 text-xl"></i>
                    <span className="text-base md:text-xl">
                      No marketing degree needed - AI handles the complexity
                    </span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-purple-500 mr-3 text-xl"></i>
                    <span className="text-base md:text-xl">
                      Skip the tutorials - works like texting a friend
                    </span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-purple-500 mr-3 text-xl"></i>
                    <span className="text-base md:text-xl">
                      Approve changes with one tap, not 50 clicks
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-2">
                <div className="">
                  <img
                    src={mobileChat}
                    alt="Marketing audit chat conversation on mobile"
                    className="w-2/3 md:w-3/4 h-auto m-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-20">
              The{" "}
              <span className="highlight-purple">
                First Unified Growth Automation App{" "}
              </span>{" "}
              For E-commerce
            </h2>
            <img
              src={competition}
              className="w-full h-auto"
              alt="Competition analysis chart"
            />
          </div>
        </div>
      </section> */}

        {/* From Foundation to Future Section */}
        <section className="py-12 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[1.65rem] font-bold mb-6">
                BEYOND MARKETING AUTOMATION:{" "}
                <span className="text-[#00e6b4]">
                  COMPLETE GROWTH INTELLIGENCE
                </span>
              </h2>
              <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic roadmap from Meta advertising foundation to
                complete agency intelligence replacement.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Phase 1: Current Reality */}
              <div className="card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>

                <div className="timeline-item mb-6">
                  <div className="flex items-center mb-4">
                    <i className="fab fa-meta text-2xl text-blue-400 mr-4"></i>
                    <span className="text-sm font-semibold text-blue-400 bg-blue-400 bg-opacity-20 px-3 py-1 rounded-full">
                      CURRENT BUILD
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Meta Advertising Foundation
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our Meta launch implements proper campaign structure and
                    proven best practices built-in from day one. Agency AI
                    launches the exact funnel architecture that Meta's algorithm
                    rewards, fixing the chaotic ad accounts that kill most
                    stores' profitability.
                  </p>
                </div>

                {/* Current Features */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                    <span className="text-gray-300">
                      Advantage+ campaigns configured for maximum efficiency
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                    <span className="text-gray-300">
                      TOF/MOF/BOF structure with proper audience exclusions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                    <span className="text-gray-300">
                      Creative testing frameworks that find winners fast
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-blue-400 mr-3"></i>
                    <span className="text-gray-300">
                      Budget distribution optimized for Meta's requirements
                    </span>
                  </div>
                </div>
              </div>

              {/* Phase 2: Platform Vision */}
              <div className="card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600"></div>

                <div className="timeline-item mb-6">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-rocket text-2xl text-green-400 mr-4"></i>
                    <span className="text-sm font-semibold text-green-400 bg-green-400 bg-opacity-20 px-3 py-1 rounded-full">
                      PLATFORM VISION
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Complete Agency Intelligence
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our proprietary AI system evolves from automation to
                    complete business intelligence. Each quarter unlocks new
                    capabilities that feed back into the core engine, turning
                    isolated channels into one self-improving ecosystem.
                  </p>
                </div>

                {/* Future Features */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3"></i>
                    <span className="text-gray-300">
                      Google Ads, Generative AI Design Studio (Beta)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3"></i>
                    <span className="text-gray-300">
                      AGEN-AI V2, Tik-Tok Ads & Snapchat Ads Integration
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3"></i>
                    <span className="text-gray-300">
                      Text to Action, Email & SMS
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-400 mr-3"></i>
                    <span className="text-gray-300">
                      CRO & Dynamic Landing Page Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Context */}
            <div className="mt-16 text-center">
              <div className="card rounded-2xl p-8 inline-block hover:shadow-lg">
                <div className="flex items-center justify-center gap-5">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      24M
                    </div>
                    <div className="text-gray-300">
                      <span className="whitespace-nowrap">E-commerce</span>{" "}
                      Stores
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold highlight-purple mb-2">
                      $495.7B
                    </div>
                    <div className="text-gray-300">
                      Total Addressable Market
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 my-6 max-w-2xl">
                  The demand for unified, intelligent growth automation will
                  only accelerate as more businesses recognize the limitations
                  of fragmented tools and expensive agency relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-20 px-6">
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
      </section> */}

        {/* <section className="py-20 px-6 bg-gradient-dark">
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
      </section> */}

        {/* <section className="py-20 px-6">
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
      </section> */}

        {/* <section className="py-20 px-6 bg-gradient-dark">
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
      </section> */}

        <section className="py-12 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="card rounded-xl p-10 shadow-2xl border border-purple-500 border-opacity-30 text-center">
              <h2 className="text-[1.65rem] font-bold mb-4">
                PARTNER WITH THE{" "}
                <span className="highlight-purple">FUTURE OF GROWTH</span>
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading investors backing Agency AI, the proprietary
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
                    href="https://calendly.com/agency-demo/agency-ai-investor-brief"
                    className="relative text-gray-900 no-underline"
                  >
                    Schedule Investor Demo
                  </a>
                </button>
                {/* <a
                href="/agency-ai-investment-deck.pdf"
                download="Agency AI Investment Pitch Deck.pdf"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg border border-gray-300 hover:bg-gray-50 transition-colors inline-block text-center no-underline"
              >
                Download Pitch Deck
              </a> */}
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
    </>
  )
}

export default IndexPage
