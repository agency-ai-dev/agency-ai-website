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
                    <a href="/" class="text-white hover:text-white transition-colors">Home</a>
                    <a href="/aboutus" class="text-gray-400 hover:text-white transition-colors">About</a>
                    <a href="/contactus" class="text-gray-400 hover:text-white transition-colors">Contact</a>
                    <a href="/pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</a>
                    <button class="primary-btn px-6 py-2 rounded-lg font-semibold shadow-lg">Book a Demo</button>
                </div>
                <button class="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <i class="fas fa-bars"></i>
                </button>
                <>
                    {menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 px-6 py-4 z-50 md:hidden !top-[120px] text-white">
                            <a href="/" className="text-white hover:text-purple-300">Home</a>
                            <a href="/aboutus" className="text-white hover:text-purple-300">About</a>
                            <a href="/contactus" className="text-white hover:text-purple-300">Contact</a>
                            <a href="/pricing" className="text-white hover:text-purple-300">Pricing</a>
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
                                Run multi-channel ads + automated email campaigns powered by AGEN.AI - your all-in-one marketing solution within Shopify.
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
                            <h3 class="text-xl font-bold mb-3">Fast Full Service Setup</h3>
                            <p class="text-gray-300 mb-6">Connect your store, complete a quick onboarding questionnaire. AGEN-AI handles the setup and launch of your ad campaigns.  </p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-chart-line text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Multi-Channel Management</h3>
                            <p class="text-gray-300 mb-6">Run ads across Meta and Google, send emails, all from one AI powered dashboard. Unify your messaging with the power of AGEN-AI.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-envelope text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Built-In Email Provider</h3>
                            <p class="text-gray-300 mb-6">Send and automate email marketing directly within Agency. Use AI driven funnels to capture the business you’re losing out on.</p>
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
                            <p class="text-gray-300 mb-6">Track campaign data, get insights and recommendations. See the performance of your campaigns in real-time dashboards.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>

                        <div class="card rounded-xl p-6 hover:shadow-lg">
                            <div class="w-14 h-14 bg-opacity-20 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                                <i class="fas fa-brain text-3xl feature-icon"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3">Leverage our Experience</h3>
                            <p class="text-gray-300 mb-6">The team behind Agency has years of experience scaling e-commerce stores, building Shopify apps, and developing automated solutions.</p>
                            <a href="#" class="flex items-center text-primary font-medium hover:underline absolute bottom-[22px]">
                                Learn More <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits" class="py-20 px-6 bg-gradient-dark">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-4">GROW YOUR BUSINESS <span class="highlight">FASTER</span></h2>
                        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Cut costs, increase margins, scale effortlessly. Welcome to a new era in digital marketing.</p>
                    </div>
                </div>
            </section>

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
                            <p class="text-gray-300 mb-12">"Since implementing Agency AI, our ROAS has improved by 42%. The platform makes it so easy to manage campaigns across multiple channels, and the AI recommendations are spot on."</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mr-4">
                                    <span class="font-bold">SB</span>
                                </div>
                                <div>
                                    <h4 class="font-bold">Sarah B.</h4>
                                    <p class="text-sm text-gray-400 mb-1">Fashion Boutique Owner</p>
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
                                    <p class="text-sm text-gray-400 mb-1">Electronics Store Owner</p>
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
                            <p class="text-gray-300 mb-12">"The email marketing functionality alone is worth the investment. Our abandoned cart recovery rate has increased by 35% since switching to Agency AI. The setup was incredibly simple too."</p>
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                                    <span class="font-bold">JT</span>
                                </div>
                                <div>
                                    <h4 class="font-bold">Jessica T.</h4>
                                    <p class="text-sm text-gray-400 mb-1">Beauty Brand Founder</p>
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
                            <button class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg text-lg !w-[275px]">
                                Contact Us
                            </button>
                        </div>
                        <p class="text-gray-400 mt-6 !min-w-[100%]">No credit card required. Cancel anytime.</p>
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
            <footer class="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-8 md:mb-0">
                        <h2 class="text-xl font-bold mb-2">Agency AI</h2>
                        <p class="opacity-70">© 2025 Agency AI. All rights reserved.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-8">
                        <a href="/" class="text-teal-400 hover:text-teal-400 transition-colors">Home</a>
                        <a href="/aboutus" class="text-white text-teal-400 transition-colors">About</a>
                        <a href="/contactus" class="text-white hover:text-teal-400 transition-colors">Contact</a>
                        <a href="/pricing" class="text-white hover:text-teal-400 transition-colors">Pricing</a>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default IndexPage;
