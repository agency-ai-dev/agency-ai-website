import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./contactstyles.css";
import agencyailogo from './../images/agencyailogo.png';

const ContactUsPage = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            <div class="antialiased">
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

                <main class="container mx-auto px-4 py-8 sm:py-12 desktop-container">
                    <section class="text-center mb-12">
                        <h1 class="text-3xl sm:text-4xl font-bold mb-4">Ready To Take Your Business To The <span class="gradient-text">Next Level?</span></h1>
                    </section>

                    <section class="max-w-xl mx-auto lg:max-w-none mb-10 transform hover:-translate-y-1 transition-transform">
                        <div class="card-highlight p-6 sm:p-8 text-center">
                            <div class="flex flex-col items-center">
                                <div class="circle-icon-highlight">
                                    <i class="fas fa-calendar-check text-black text-2xl"></i>
                                </div>
                                <h2 class="text-2xl font-bold mb-3">Book A Demo</h2>
                                <p class="text-gray-100 mb-5 max-w-lg mx-auto">See how Agency AI can transform your marketing strategy with our powerful AI-driven platform. Get a personalized walkthrough in just 15 minutes.</p>
                                <button class="btn-highlight py-3 px-8 rounded-lg text-black font-semibold text-lg">Schedule Your Demo Now</button>
                            </div>
                        </div>
                    </section>

                    <div class="lg:desktop-grid">
                        <section class="max-w-xl mx-auto lg:max-w-none mb-12 lg:mb-0">
                            <div class="card p-6 sm:p-8">
                                <form class="space-y-6">
                                    <div>
                                        <label for="name" class="block text-sm font-medium mb-2">Name</label>
                                        <input type="text" id="name" name="name" class="w-full px-4 py-3 rounded-lg" placeholder="Your name" required />
                                    </div>

                                    <div>
                                        <label for="email" class="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-lg" placeholder="your@email.com" required />
                                    </div>

                                    <div>
                                        <label for="company" class="block text-sm font-medium mb-2">Company (Optional)</label>
                                        <input type="text" id="company" name="company" class="w-full px-4 py-3 rounded-lg" placeholder="Your company name" />
                                    </div>

                                    <div>
                                        <label for="message" class="block text-sm font-medium mb-2">Message</label>
                                        <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-lg" placeholder="How can we help you?" required></textarea>
                                    </div>

                                    <div>
                                        <button type="submit" class="btn-primary w-full py-3 px-6 rounded-lg font-medium text-black text-center">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <section class="space-y-8">
                            <div class="max-w-xl mx-auto lg:max-w-none mb-12">
                                <h2 class="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

                                <div class="space-y-4">
                                    <div class="card p-4 sm:p-6">
                                        <button class="accordion-trigger w-full flex justify-between items-center" onclick="toggleAccordion(this)">
                                            <span class="font-medium">How quickly can I get started with Agency AI?</span>
                                            <i class="fas fa-chevron-down text-teal-400 transition-transform"></i>
                                        </button>
                                        <div class="accordion-content pt-4 text-gray-300">
                                            <p>You can get started with Agency AI in minutes. After connecting your store, our onboarding manager will help you set up your first campaigns quickly.</p>
                                        </div>
                                    </div>

                                    <div class="card p-4 sm:p-6">
                                        <button class="accordion-trigger w-full flex justify-between items-center" onclick="toggleAccordion(this)">
                                            <span class="font-medium">What platforms does Agency AI integrate with?</span>
                                            <i class="fas fa-chevron-down text-teal-400 transition-transform"></i>
                                        </button>
                                        <div class="accordion-content pt-4 text-gray-300">
                                            <p>Agency AI integrates seamlessly with Shopify, Meta (Facebook & Instagram), and Google Ads platforms with more integrations coming soon.</p>
                                        </div>
                                    </div>

                                    <div class="card p-4 sm:p-6">
                                        <button class="accordion-trigger w-full flex justify-between items-center" onclick="toggleAccordion(this)">
                                            <span class="font-medium">How does pricing work?</span>
                                            <i class="fas fa-chevron-down text-teal-400 transition-transform"></i>
                                        </button>
                                        <div class="accordion-content pt-4 text-gray-300">
                                            <p>Agency AI offers flexible pricing plans based on your store's needs. Contact us for a custom quote tailored to your business size and requirements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <footer class="py-8 border-t border-gray-800">
                    <div class="container mx-auto px-4">
                        <div class="text-center">
                            <p class="text-gray-400 text-sm">© 2025 Agency AI. All rights reserved.</p>
                            <div class="flex justify-center space-x-4 mt-4">
                                <a href="#" class="text-gray-400 hover:text-white transition">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white transition">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default ContactUsPage;