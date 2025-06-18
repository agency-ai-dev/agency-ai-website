import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./pricingstyles.css";
import agencyailogo from './../images/agencyailogo.png';

const PricingPage = () => {

    const [isAnnual, setIsAnnual] = React.useState(false);

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
                        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 px-6 py-4 z-50 md:hidden !top-[120px] text-white">
                            <a href="#features" className="text-white hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Features</a>
                            <a href="#benefits" className="text-white hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Benefits</a>
                            <a href="#referrals" className="text-white hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>Referrals</a>
                            <a href="#about" className="text-white hover:text-purple-300" onClick={() => setMenuOpen(!menuOpen)}>About</a>
                            <button className="primary-btn px-4 py-2 rounded-lg font-semibold shadow">
                                Book a Demo
                            </button>
                        </div>
                    )}
                </>
            </nav>
            <div class="container">
                <h1 class="section-title">Choose Your Plan</h1>
                <p class="section-subtitle">Select the perfect plan for your marketing needs</p>

                <div className="pricing-toggle">
                    <span className={`toggle-label monthly ${!isAnnual ? "active" : ""}`}>Monthly</span>

                    <label className="switch">
                        <input
                            type="checkbox"
                            id="pricing-toggle"
                            checked={isAnnual}
                            onChange={(e) => setIsAnnual(e.target.checked)}
                        />
                        <span className="slider"></span>
                    </label>

                    <span className={`toggle-label annual ${isAnnual ? "active" : ""}`}>Annual</span>
                    <span className="savings-badge">Save 30%</span>
                </div>

                <div class="pricing-grid">

                    <div class="pricing-card" id="essentials-plan">
                        <h2 class="plan-name">Essentials</h2>
                        {!isAnnual && <div class="plan-price monthly">$99</div>}
                        {isAnnual && <div class="plan-price annual" >$69</div>}
                        {!isAnnual && <div class="plan-billing monthly">per month</div>}
                        {isAnnual && <div class="plan-billing annual" >per month, billed annually ($831/year)</div>}
                        <div class="plan-limit">Up to $1,000 ad spend/month</div>

                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Full funnel ads launch pack</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Facebook & Instagram ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Google ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>24/7 ad optimization</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI traffic funnels</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI remarketing audiences</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI catalog creatives</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Actionable growth tips</span>
                            </div>
                        </div>

                        <a href="#" class="cta-button">Get Started</a>
                    </div>

                    <div class="pricing-card" id="growth-plan">
                        <h2 class="plan-name">Growth</h2>
                        {!isAnnual && <div class="plan-price monthly">$199</div>}
                        {isAnnual && <div class="plan-price annual" >$139</div>}
                        {!isAnnual && <div class="plan-billing monthly">per month</div>}
                        {isAnnual && <div class="plan-billing annual" >per month, billed annually ($1,671/year)</div>}
                        <div class="plan-limit">Up to $4,000 ad spend/month</div>

                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Free audit</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI agent reporting & action</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Full funnel ads launch pack</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Facebook & Instagram ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Google ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>24/7 ad optimization</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI traffic funnels</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI remarketing audiences</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI catalog creatives</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Actionable growth tips</span>
                            </div>
                        </div>

                        <a href="#" class="cta-button">Get Started</a>
                    </div>

                    <div class="pricing-card recommended" id="pro-plan">
                        <div class="recommended-badge">Recommended</div>
                        <h2 class="plan-name">Pro</h2>
                        {!isAnnual && <div class="plan-price monthly">$299</div>}
                        {isAnnual && <div class="plan-price annual" >$209</div>}
                        {!isAnnual && <div class="plan-billing monthly">per month</div>}
                        {isAnnual && <div class="plan-billing annual" >per month, billed annually ($2,511/year)</div>}
                        <div class="plan-limit">Up to $7,000 ad spend/month</div>

                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Bi-weekly account manager meeting</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Free audit</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI agent reporting & action</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Full funnel ads launch pack</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Facebook & Instagram ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Google ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>24/7 ad optimization</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI traffic funnels</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI remarketing audiences</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI catalog creatives</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Actionable growth tips</span>
                            </div>
                        </div>

                        <a href="#" class="cta-button">Get Started</a>
                    </div>

                    <div class="pricing-card" id="premium-plan">
                        <h2 class="plan-name">Premium</h2>
                        {!isAnnual && <div class="plan-price monthly">$499</div>}
                        {isAnnual && <div class="plan-price annual" >$349</div>}
                        {!isAnnual && <div class="plan-billing monthly">per month</div>}
                        {isAnnual && <div class="plan-billing annual" >per month, billed annually ($4,191/year)</div>}
                        <div class="plan-limit">Up to $15,000 ad spend/month</div>

                        <div class="feature-list">
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Dedicated account manager</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Free audit</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI agent reporting & action</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Full funnel ads launch pack</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Facebook & Instagram ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AGEN-AI Google ads</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>24/7 ad optimization</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI traffic funnels</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI remarketing audiences</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>AI catalog creatives</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check feature-icon"></i>
                                <span>Actionable growth tips</span>
                            </div>
                        </div>

                        <a href="#" class="cta-button">Get Started</a>
                    </div>
                </div>

                <div class="enterprise-section">
                    <h2 class="enterprise-title">Need a Custom Solution?</h2>
                    <p class="enterprise-text">Contact us for Enterprise-level pricing and custom features tailored to your specific business requirements.</p>
                    <a href="#" class="cta-button" style={{ maxWidth: '300px', margin: '0 auto' }}>Contact for Enterprise Pricing</a>
                </div>
            </div>
        </div>
    )
}

export default PricingPage;