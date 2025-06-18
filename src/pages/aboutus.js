import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./aboutstyles.css";
import agencyailogo from './../images/agencyailogo.png';

const ContactUsPage = () => {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <div class="pdf-container">
            <div class="min-h-screen">
                <nav class="px-6 py-4 flex justify-between items-center border-b border-opacity-20 border-purple-500">
                    <div class="flex items-center">
                        <img src={agencyailogo} style={{ width: '100px', marginBottom: '0' }} />
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <a href="/" class="text-gray-400 hover:text-white transition-colors">Home</a>
                        <a href="/aboutus" class="text-white hover:text-white transition-colors">About</a>
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

                <section class="py-16 px-6 md:px-12 lg:px-24 md:pt-24 max-w-7xl mx-auto">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        ABOUT <span class="highlight-purple">AGENCY AI</span>
                    </h1>
                    <p class="text-lg md:text-xl max-w-4xl opacity-90 mb-12">
                        Our mission is to help Shopify store owners and their teams simplify marketing and grow faster using AI technology.
                    </p>
                </section>

                <section class="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div class="card p-8 mb-16">
                        <h2 class="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                        <p class="mb-6 text-lg opacity-90">
                            We have years of first hand experience managing and marketing for eCommerce businesses, and building technical solutions for Shopify stores.
                        </p>
                        <h2 class="text-2xl md:text-3xl font-bold mb-6 mt-12">The Solution</h2>
                        <p class="mb-6 text-lg opacity-90">
                            Agency AI is the future of digital marketing.
                        </p>
                        <p class="mb-6 text-lg opacity-90">
                            The Shopify app is closely integrated with AI technology to create and optimize multi channel marketing based on your specific industry, products, and goals.
                        </p>
                        <p class="mb-6 text-lg opacity-90">
                            We built it to think like a marketing agency and are constantly improving and adding functionality.
                        </p>
                        <h3 class="text-xl font-semibold mb-4 mt-8">Our team collectively has:</h3>
                        <ul class="list-disc pl-6 mb-12 space-y-2 text-lg opacity-90">
                            <li>20+ years experience in eCommerce</li>
                            <li>Built successful Shopify apps that are used daily by thousands of shops</li>
                            <li>Created and scaled multiple Shopify stores from scratch into successful businesses</li>
                            <li>Built countless solutions for Shopify stores, including the first ever Shopify performance analysis tool</li>
                            <li>Been declared a Shopify Expert by Shopify + recommended by Shopify support and the community</li>
                        </ul>
                        <p class="mb-6 text-lg opacity-90">
                            Having years of experience as business owners and being a part of startups, we're excited about AI technology to help businesses of all size operate more efficiently and effectively.
                        </p>
                    </div>
                </section>

                <section class="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Meet Our <span class="highlight-teal">Founders</span>
                    </h2>

                    <div class="grid md:grid-cols-3 gap-8 mb-16">
                        <div class="card p-8 flex flex-col items-center text-center">
                            <img src="https://agencyai.app/static/anthony-profile-7aa35e9d2059ccb60a9361cb680523d2.png" alt="Anthony" class="founder-img mb-6" />
                            <h3 class="text-2xl font-bold highlight-purple mb-1">Anthony</h3>
                            <p class="text-lg mb-4 opacity-80">CEO, Founder</p>
                            <p class="opacity-90">
                                Anthony brings 13 years of experience in the Shopify ecosystem, honing his skills in eCommerce marketing while building, scaling, and managing numerous successful stores. His passion lies at the intersection of marketing technology and AI.
                            </p>
                            <p class="mt-4 opacity-80">
                                When unplugged, he loves traveling, beaches, and quality time with his canine companion.
                            </p>
                        </div>

                        <div class="card p-8 flex flex-col items-center text-center">
                            <img src="https://agencyai.app/static/joe-profile-8537861ae22e21610fe982ff6a5f3122.png" alt="Joe" class="founder-img mb-6" />
                            <h3 class="text-2xl font-bold highlight-purple mb-1">Joe</h3>
                            <p class="text-lg mb-4 opacity-80">Chief Software Architect, Technical Advisor</p>
                            <p class="opacity-90">
                                Joe's an expert Shopify app developer, 7 year eCommerce store owner, former Shopify optimization agency owner, and the Founder / CTO of Automator Apps.
                            </p>
                            <p class="mt-4 opacity-80">
                                Outside of tech he's into nature adventures, travel, trees, music, books, and art.
                            </p>
                        </div>

                        <div class="card p-8 flex flex-col items-center text-center">
                            <img src="https://agencyai.app/static/john-profile-42a4f3ff6fcd1aa7068aa3fd29cc362c.jpg" alt="John" class="founder-img mb-6" />
                            <h3 class="text-2xl font-bold highlight-purple mb-1">John</h3>
                            <p class="text-lg mb-4 opacity-80">CTO, Lead Engineer</p>
                            <p class="opacity-90">
                                John is a full-stack developer with over 6 years of experience. He's worked at Shopify agencies, consulted for Fortune 500 companies, and contributed to early-stage startups.
                            </p>
                            <p class="mt-4 opacity-80">
                                In his free time, he enjoys playing pickleball, relaxing in the sauna, and spending time with his wife and daughter.
                            </p>
                        </div>
                    </div>
                </section>

                <section class="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-8">Ready to transform your <span class="highlight-teal">marketing</span>?</h2>
                    <p class="text-lg max-w-3xl mx-auto mb-10 opacity-90">
                        Start using Agency AI today to simplify + automate your marketing workflow.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <a href="#" class="btn-primary px-8 py-3 rounded-md font-semibold text-lg no-underline">Book a Demo</a>
                        <a href="#" class="btn-secondary px-8 py-3 rounded-md font-semibold text-lg text-white no-underline">Start Free Trial</a>
                    </div>
                </section>

                <footer class="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-8 md:mb-0">
                        <h2 class="text-xl font-bold mb-2">Agency AI</h2>
                        <p class="opacity-70">© 2025 Agency AI. All rights reserved.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-8">
                        <a href="/" class="text-white hover:text-teal-400 transition-colors">Home</a>
                        <a href="/aboutus" class="text-teal-400 transition-colors">About</a>
                        <a href="/contactus" class="text-white hover:text-teal-400 transition-colors">Contact</a>
                        <a href="/pricing" class="text-white hover:text-teal-400 transition-colors">Pricing</a>
                    </div>
                </div>
            </footer>
            </div>
        </div>
    )
}

export default ContactUsPage;