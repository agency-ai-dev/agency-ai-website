import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./pricingstyles.css";

const PricingPage = () => {
    return (
        <>
            <div class="container">
                <h1 class="section-title">Choose Your Plan</h1>
                <p class="section-subtitle">Select the perfect plan for your marketing needs</p>

                <div class="pricing-toggle">
                    <span class="toggle-label monthly active">Monthly</span>
                    <label class="switch">
                        <input type="checkbox" id="pricing-toggle" />
                        <span class="slider"></span>
                    </label>
                    <span class="toggle-label annual">Annual</span>
                    <span class="savings-badge">Save 30%</span>
                </div>

                <div class="pricing-grid">

                    <div class="pricing-card" id="essentials-plan">
                        <h2 class="plan-name">Essentials</h2>
                        <div class="plan-price monthly">$99</div>
                        <div class="plan-price annual" style={{display: 'none'}}>$69</div>
                        <div class="plan-billing monthly">per month</div>
                        <div class="plan-billing annual" style={{display: 'none'}}>per month, billed annually ($831/year)</div>
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

                    <div class="pricing-card recommended" id="growth-plan">
                        <div class="recommended-badge">Recommended</div>
                        <h2 class="plan-name">Growth</h2>
                        <div class="plan-price monthly">$199</div>
                        <div class="plan-price annual" style={{display: 'none'}}>$139</div>
                        <div class="plan-billing monthly">per month</div>
                        <div class="plan-billing annual" style={{display: 'none'}}>per month, billed annually ($1,671/year)</div>
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

                    <div class="pricing-card" id="pro-plan">
                        <h2 class="plan-name">Pro</h2>
                        <div class="plan-price monthly">$299</div>
                        <div class="plan-price annual" style={{display: 'none'}}>$209</div>
                        <div class="plan-billing monthly">per month</div>
                        <div class="plan-billing annual" style={{display: 'none'}}>per month, billed annually ($2,511/year)</div>
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
                        <div class="plan-price monthly">$499</div>
                        <div class="plan-price annual" style={{display: 'none'}}>$349</div>
                        <div class="plan-billing monthly">per month</div>
                        <div class="plan-billing annual" style={{display: 'none'}}>per month, billed annually ($4,191/year)</div>
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
        </>
    )
}

export default PricingPage;