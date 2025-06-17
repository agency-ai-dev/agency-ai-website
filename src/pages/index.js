import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./homestyles.css"
import agencyailogo from './../images/agencyailogo.png';

const IndexPage = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div class="pdf-container">
            <nav class="px-6 py-4 flex justify-between items-center border-b border-opacity-20 border-purple-500">
                <div class="flex items-center">
                    <img src={agencyailogo} style={{ width: '100px', marginBottom: '0' }} />
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="#features" class="text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="#benefits" class="text-gray-300 hover:text-white transition-colors">Benefits</a>
                    <a href="#referrals" class="text-gray-300 hover:text-white transition-colors">Referrals</a>
                    <a href="#about" class="text-gray-300 hover:text-white transition-colors">About</a>
                    <button class="primary-btn px-6 py-2 rounded-lg font-semibold shadow-lg">Book a Demo</button>
                </div>
                <button class="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <i class="fas fa-bars"></i>
                </button>
                <>
                    {menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 px-6 py-4 z-50 md:hidden top-[120px]">
                            <a href="#features" className="hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Features</a>
                            <a href="#benefits" className="hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Benefits</a>
                            <a href="#referrals" className="hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Referrals</a>
                            <a href="#about" className="hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>About</a>
                            <button className="primary-btn px-4 py-2 rounded-lg font-semibold shadow">
                                Book a Demo
                            </button>
                        </div>
                    )}
                </>
            </nav>

            <section class="relative py-20 px-6 overflow-hidden">
                <div class="glow"></div>
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="grid md:grid-cols-1 gap-12 items-center">
                        <div>
                            <h1 class="text-4xl md:text-5xl font-bold leading-tight text-center">
                                MARKETING AUTOMATION <span class="highlight-purple">THAT FEELS LIKE AN IN-HOUSE TEAM</span>
                            </h1>
                            <p class="mt-6 text-xl text-gray-300 text-center !min-w-[100%]">
                                Run multi-channel ads + automated email campaigns powered by AGENCY.AI - your all-in-one marketing solution within Shopify.
                            </p>
                            <div class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button class="secondary-btn px-8 py-3 rounded-lg font-semibold shadow-lg text-white text-lg m-auto">
                                    Start Free Trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-12 px-6">
                <div class="max-w-5xl mx-auto">
                    <div class="card rounded-xl p-8 shadow-2xl border border-purple-500 border-opacity-30">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 class="text-3xl font-bold mb-4">Get Your Free <span class="highlight">Marketing Audit</span></h2>
                                <p class="text-gray-300 mb-6">Our AI will analyze your current marketing strategy and identify opportunities for improvement. Receive a custom report with actionable insights.</p>
                                <div class="flex items-center mb-6">
                                    <i class="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                                    <span>Ad Performance Analysis</span>
                                </div>
                                <div class="flex items-center mb-6">
                                    <i class="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                                    <span>Ad Copy Analysis</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                                    <span>Growth Opportunity Identification</span>
                                </div>
                            </div>
                            <div>
                                <form class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium mb-1" for="email">Your Email</label>
                                        <input type="email" id="email" class="form-input w-full px-4 py-3 rounded-lg" placeholder="you@company.com" required />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium mb-1" for="name">Your Name</label>
                                        <input type="text" id="name" class="form-input w-full px-4 py-3 rounded-lg" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium mb-1" for="website">Website URL</label>
                                        <input type="url" id="website" class="form-input w-full px-4 py-3 rounded-lg" placeholder="https://yourstore.com" required />
                                    </div>
                                    <button type="submit" class="primary-btn w-full py-3 rounded-lg font-semibold shadow-lg text-lg">
                                        Get Free Audit
                                    </button>
                                    <p class="text-xs text-center text-gray-400 mt-2">No credit card required. Results delivered within 24 hours.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" class="py-20 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4">SEAMLESS INTEGRATIONS <span class="highlight-purple">BUILT FOR SHOPIFY</span></h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto">All the tools you need to grow your e-commerce business, integrated into one powerful platform.</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-magic text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Quick, Guided Setup</h3>
                            <p class="text-gray-300 mb-6">Connect your store, chat with your onboarding manager, and start building campaigns in minutes. Agency AI handles the setup and recommends best practices.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-chart-line text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Multi-Channel Management</h3>
                            <p class="text-gray-300 mb-6">Run ads across Meta and Google + send emails, all from one dashboard. Agency AI keeps your message aligned across platforms.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-envelope text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Built-In Email Provider</h3>
                            <p class="text-gray-300 mb-6">Send and automate marketing emails directly within Agency AI. No extra software needed for data-driven, on-brand messaging.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-users-cog text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Full-Stack Agency Experience</h3>
                            <p class="text-gray-300 mb-6">Get the expertise of a full-service agency: campaign strategy, automation, and optimization. All without the overhead costs.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-chart-pie text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Insightful Data Tracking</h3>
                            <p class="text-gray-300 mb-6">Track campaign data and get insights and recommendations. See the performance of your campaigns in real-time dashboards.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-brain text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Created by Experts</h3>
                            <p class="text-gray-300 mb-6">The team behind Agency AI has years of experience scaling e-commerce stores + building Shopify apps and automated solutions.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="benefits" class="py-20 px-6 bg-gradient-dark">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4">GROW YOUR BUSINESS <span class="highlight">FASTER</span></h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Our customers see an average of 30% increase in ROAS after just 60 days using Agency AI.</p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="phone-mockup rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
                            <div class="p-2 bg-gray-800 flex items-center space-x-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                <div class="ml-4 text-xs text-gray-400">Campaign Creator</div>
                            </div>
                            <div class="p-4 space-y-4">
                                <div class="bg-gray-800 p-4 rounded-lg">
                                    <h3 class="text-white font-bold mb-3">Create New Campaign</h3>
                                    <div class="space-y-3">
                                        <div>
                                            <label class="block text-sm text-gray-400 mb-1">Campaign Name</label>
                                            <input type="text" class="form-input w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600" value="Fall Collection Launch" />
                                        </div>
                                        <div>
                                            <label class="block text-sm text-gray-400 mb-1">Campaign Goal</label>
                                            <select class="form-input w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600">
                                                <option>Increase Sales</option>
                                                <option>Brand Awareness</option>
                                                <option>Lead Generation</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-sm text-gray-400 mb-1">Budget</label>
                                            <input type="text" class="form-input w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600" value="$1,500" />
                                        </div>
                                        <div>
                                            <label class="block text-sm text-gray-400 mb-1">Channels</label>
                                            <div class="flex space-x-2">
                                                <div class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center">
                                                    <i class="fab fa-facebook-f mr-1"></i> Facebook
                                                    <i class="fas fa-times ml-1"></i>
                                                </div>
                                                <div class="bg-pink-600 text-white px-3 py-1 rounded-full text-xs flex items-center">
                                                    <i class="fab fa-instagram mr-1"></i> Instagram
                                                    <i class="fas fa-times ml-1"></i>
                                                </div>
                                                <div class="bg-red-600 text-white px-3 py-1 rounded-full text-xs flex items-center">
                                                    <i class="fab fa-google mr-1"></i> Google
                                                    <i class="fas fa-times ml-1"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-sm text-gray-400 mb-1">AI Copy Suggestions</label>
                                            <div class="bg-gray-700 p-3 rounded-lg border border-indigo-500 text-sm">
                                                "Discover our new Fall Collection. Cozy styles that transition perfectly from summer to fall. Shop now and get 15% off your first order."
                                            </div>
                                        </div>
                                    </div>
                                    <button class="bg-indigo-600 text-white w-full py-2 rounded-lg mt-4 font-medium">Generate Campaign</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-8">
                                <div class="flex items-start mb-3">
                                    <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <i class="fas fa-rocket text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold mb-2">Launch Campaigns in Minutes</h3>
                                        <p class="text-gray-300">Our AI helps you create high-converting ad campaigns across multiple platforms with just a few clicks. No design or copywriting skills needed.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <div class="flex items-start mb-3">
                                    <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <i class="fas fa-robot text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold mb-2">AI-Powered Optimization</h3>
                                        <p class="text-gray-300">Our algorithms continuously monitor and optimize your campaigns for maximum performance, automatically shifting budget to your most successful ads.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <div class="flex items-start mb-3">
                                    <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <i class="fas fa-dollar-sign text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold mb-2">Increase ROAS</h3>
                                        <p class="text-gray-300">Our customers typically see a 30-50% increase in their Return on Ad Spend within the first 60 days of using Agency AI's platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-start mb-3">
                                    <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                        <i class="fas fa-clock text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold mb-2">Save 20+ Hours Per Week</h3>
                                        <p class="text-gray-300">Stop spending hours managing campaigns across multiple platforms. Agency AI automates the process, letting you focus on growing your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <button class="primary-btn px-8 py-3 rounded-lg font-semibold shadow-lg text-lg">
                                    See How It Works
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section id="referrals" class="py-20 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4">MORE CHANNELS, <span class="highlight">MORE REFERRALS</span></h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Drive more referrals with Agency AI's unique range of invitation channels.</p>
                    </div>

                    <div class="grid md:grid-cols-4 gap-6">

                        <div class="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6">
                                <div class="text-center mb-4">
                                    <div class="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-user-plus text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 class="text-lg font-bold text-center mb-3">Refer a friend and get $10 off your next order</h3>
                                <form class="space-y-3 mt-6">
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" class="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" class="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button class="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>

                        <div class="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6">
                                <div class="text-center mb-4">
                                    <div class="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-share-alt text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 class="text-lg font-bold text-center mb-3">Sharing is caring! Refer a friend and get $15 off your next order.</h3>
                                <form class="space-y-3 mt-6">
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" class="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" class="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button class="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>

                        <div class="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6">
                                <div class="text-center mb-4">
                                    <div class="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-percentage text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 class="text-lg font-bold text-center mb-3">Give 15%, Get 15%</h3>
                                <p class="text-sm text-gray-300 text-center mb-4">Refer your friend, and they'll receive 15% off their first order. Plus, you'll get a dazzling 15% off your next purchase when they convert!</p>
                                <div class="flex justify-center space-x-2 mt-6">
                                    <button class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i class="fab fa-facebook-f text-gray-300"></i>
                                    </button>
                                    <button class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i class="fab fa-twitter text-gray-300"></i>
                                    </button>
                                    <button class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i class="fab fa-linkedin-in text-gray-300"></i>
                                    </button>
                                    <button class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i class="fas fa-envelope text-gray-300"></i>
                                    </button>
                                    <button class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                        <i class="fab fa-whatsapp text-gray-300"></i>
                                    </button>
                                </div>
                                <button class="secondary-btn w-full py-2 rounded-lg text-white mt-4">Next</button>
                            </div>
                        </div>

                        <div class="referral-card rounded-xl shadow-lg overflow-hidden">
                            <div class="p-6">
                                <div class="text-center mb-4">
                                    <div class="w-16 h-16 mx-auto bg-opacity-20 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-heart text-2xl feature-icon"></i>
                                    </div>
                                </div>
                                <h3 class="text-lg font-bold text-center mb-3">Share the love - refer a friend and get $10 off your next order.</h3>
                                <form class="space-y-3 mt-6">
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Email</label>
                                        <input type="email" class="form-input w-full px-3 py-2 rounded-lg" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label class="block text-xs text-gray-400 mb-1">Your Name</label>
                                        <input type="text" class="form-input w-full px-3 py-2 rounded-lg" placeholder="Your Name" />
                                    </div>
                                    <button class="secondary-btn w-full py-2 rounded-lg text-white">Next</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-16 text-center">
                        <button class="primary-btn px-8 py-3 rounded-lg font-semibold shadow-lg text-lg">
                            Start Your Referral Program Today
                        </button>
                        <p class="text-gray-400 mt-4">No setup fees. Start generating referrals in minutes.</p>
                    </div>
                </div>
            </section> */}

            <section class="py-20 px-6 bg-gradient-dark">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4">WHAT OUR <span class="highlight-purple">CUSTOMERS SAY</span></h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Join hundreds of satisfied Shopify store owners who have transformed their marketing with Agency.</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="flex mb-4">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                            <p class="text-gray-300 mb-6">"Since implementing Agency AI, our ROAS has improved by 42%. The platform makes it so easy to manage campaigns across multiple channels, and the AI recommendations are spot on."</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                                    <span class="font-bold">SB</span>
                                </div>
                                <div>
                                    <h4 class="font-bold">Sarah B.</h4>
                                    <p class="text-sm text-gray-400">Fashion Boutique Owner</p>
                                </div>
                            </div>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="flex mb-4">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                            <p class="text-gray-300 mb-6">"The time savings alone are worth it. We used to spend 25+ hours a week managing our marketing campaigns. Now Agency AI handles most of it automatically, and our results are actually better!"</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                                    <span class="font-bold">MK</span>
                                </div>
                                <div>
                                    <h4 class="font-bold">Michael K.</h4>
                                    <p class="text-sm text-gray-400">Electronics Store Owner</p>
                                </div>
                            </div>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="flex mb-4">
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                                <i class="fas fa-star text-yellow-400"></i>
                            </div>
                            <p class="text-gray-300 mb-6">"The email marketing functionality alone is worth the investment. Our abandoned cart recovery rate has increased by 35% since switching to Agency AI. The setup was incredibly simple too."</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                                    <span class="font-bold">JT</span>
                                </div>
                                <div>
                                    <h4 class="font-bold">Jessica T.</h4>
                                    <p class="text-sm text-gray-400">Beauty Brand Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 px-6">
                <div class="max-w-5xl mx-auto">
                    <div class="card rounded-xl p-10 shadow-2xl border border-purple-500 border-opacity-30 text-center">
                        <h2 class="text-4xl font-bold mb-4">Ready to <span class="highlight">Transform</span> Your Marketing?</h2>
                        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of successful Shopify stores already using Agency AI to automate their marketing and increase revenue.</p>
                        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button class="primary-btn px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">
                                Start 14-Day Free Trial
                            </button>
                            <button class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">
                                Contact Us
                            </button>
                        </div>
                        <p class="text-gray-400 mt-6">No credit card required. Cancel anytime.</p>
                    </div>
                </div>
            </section>

            {/* <footer class="py-12 px-6 bg-gradient-dark border-t border-gray-800">
                <div class="max-w-7xl mx-auto">
                    <div class="grid md:grid-cols-4 gap-8">
                        <div>
                            <div class="flex items-center mb-6">
                                <span class="text-2xl font-bold">AGENCY<span class="highlight-purple">.AI</span></span>
                            </div>
                            <p class="text-gray-400 mb-6">The all-in-one marketing automation platform for Shopify stores.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i class="fab fa-facebook-f text-gray-300"></i>
                                </a>
                                <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i class="fab fa-twitter text-gray-300"></i>
                                </a>
                                <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i class="fab fa-instagram text-gray-300"></i>
                                </a>
                                <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <i class="fab fa-linkedin-in text-gray-300"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-6">Platform</h4>
                            <ul class="space-y-3">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Updates</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-6">Resources</h4>
                            <ul class="space-y-3">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg mb-6">Company</h4>
                            <ul class="space-y-3">
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                        <p>&copy; 2023 Agency AI. All rights reserved.</p>
                    </div>
                </div>
            </footer> */}
        </div>

    )
}

export default IndexPage;
