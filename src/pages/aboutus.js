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
                        Our mission is to help Shopify store owners and their teams simplify marketing and grow faster by leveraging AI technology.
                    </p>
                </section>

                <section class="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                    <div class="card p-8 mb-16">
                        <h2 class="text-2xl md:text-3xl font-bold mb-6">From Our Store to Yours: Marketing Reimagined.</h2>
                        <p class="mb-6 text-lg opacity-90">
                            Ever feel like you need a full-scale marketing agency, but it's just not in the budget or you're tired of explaining your vision? We've been there. In fact, we built an 8-figure Shopify brand from the ground up, experiencing every triumph and frustration that comes with scaling an eCommerce business.
                            That journey, filled with countless hours of marketing strategy, campaign management, and a relentless pursuit of efficiency, led us to a powerful realization: <b>there had to be a better way.  </b></p>
                        <h2 class="text-2xl md:text-3xl font-bold mb-6 mt-12">Introducing Agency: The Shopify App Born from Real-World Success & AI Innovation</h2>
                        <p class="mb-6 text-lg opacity-90">
                            Agency isn't just another app; it's the culmination of our <b>20+ years of collective experience</b> at the forefront of eCommerce. We've not only built successful Shopify apps relied upon by thousands of merchants daily, but we've also walked in your shoes, scaling multiple Shopify stores into thriving businesses. We're even Shopify-recognized Experts, having developed groundbreaking solutions like the platform's first-ever performance analysis tool.
                        </p>
                        <h3 class="text-xl font-semibold mb-4 mt-8">Why Does This Matter For You?</h3>
                        <ul class="list-disc pl-6 mb-12 space-y-2 text-lg opacity-90">
                            <li><b>Benefit from Our Blueprint:</b> We've poured our hard-earned knowledge – the strategies that built our 8-figure brand – into Agency. It's designed to think like a strategic marketing agency, creating and optimizing multi-channel campaigns based on your unique industry, products, and goals.</li>
                            <li><b>AI-Powered, Human-Perfected:</b> We combine the raw power of cutting-edge AI with the nuanced understanding that only comes from years of in-the-trenches eCommerce marketing. This means smarter campaigns, better results, and continuous improvement.</li>
                            <li><b>Your Growth Partner:</b> As entrepreneurs who have navigated the startup world and scaled businesses, we're passionate about empowering others. Agency is built to help businesses of all sizes operate more efficiently and effectively, giving you back time and resources to focus on what you do best.</li>
                        </ul>
                        <p class="mb-6 text-lg opacity-90"><b>
                            Agency is more than just software; it's a strategic advantage, built by Shopify veterans for Shopify visionaries.</b>
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