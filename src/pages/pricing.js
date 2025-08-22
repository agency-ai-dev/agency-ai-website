import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./pricingstyles.css"
import agencyailogo from "./../images/agencyailogo.png"
import Footer from "../components/footer"
import Header from "../components/header"

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="pdf-container">
      <Header />
      <div className="container">
        <h1 className="section-title">Choose Your Plan</h1>
        <p className="section-subtitle max-w-none">
          Select the perfect plan for your marketing needs
        </p>

        <div className="pricing-toggle">
          <span className={`toggle-label monthly ${!isAnnual ? "active" : ""}`}>
            Monthly
          </span>

          <label className="switch">
            <input
              type="checkbox"
              id="pricing-toggle"
              checked={isAnnual}
              onChange={e => setIsAnnual(e.target.checked)}
            />
            <span className="slider"></span>
          </label>

          <span className={`toggle-label annual ${isAnnual ? "active" : ""}`}>
            Annual
          </span>
          <span className="savings-badge">Save 30%</span>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card recommended" id="essentials-plan">
            <div className="recommended-badge">Recommended</div>
            <h2 className="plan-name">Essentials</h2>
            {!isAnnual && <div className="plan-price monthly">$59</div>}
            {isAnnual && <div className="plan-price annual">$41</div>}
            {!isAnnual && <div className="plan-billing monthly">per month</div>}
            {isAnnual && (
              <div className="plan-billing annual">
                per month, billed annually ($492/year)
              </div>
            )}
            <div className="plan-limit">Unlimited ad spend/month</div>

            <div className="feature-list">
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Free Audit</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Full funnel ads launch pack</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Facebook & Instagram ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>24/7 ad optimization</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI traffic funnels</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI remarketing audiences</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI catalog creatives</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Actionable growth tips</span>
              </div>
            </div>

            <a href="#" className="cta-button no-underline">
              Start Free Trial
            </a>
          </div>

          {/* <div className="pricing-card" id="growth-plan">
            <h2 className="plan-name">Growth</h2>
            {!isAnnual && <div className="plan-price monthly">$199</div>}
            {isAnnual && <div className="plan-price annual">$139</div>}
            {!isAnnual && <div className="plan-billing monthly">per month</div>}
            {isAnnual && (
              <div className="plan-billing annual">
                per month, billed annually ($1,671/year)
              </div>
            )}
            <div className="plan-limit">Up to $4,000 ad spend/month</div>

            <div className="feature-list">
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Free audit</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI agent reporting & action</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Full funnel ads launch pack</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Facebook & Instagram ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Google ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>24/7 ad optimization</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI traffic funnels</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI remarketing audiences</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI catalog creatives</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Actionable growth tips</span>
              </div>
            </div>

            <a href="#" className="cta-button no-underline">
              Get Started
            </a>
          </div> */}

          {/* <div className="pricing-card recommended" id="pro-plan">
            <div className="recommended-badge">Recommended</div>
            <h2 className="plan-name">Pro</h2>
            {!isAnnual && <div className="plan-price monthly">$299</div>}
            {isAnnual && <div className="plan-price annual">$209</div>}
            {!isAnnual && <div className="plan-billing monthly">per month</div>}
            {isAnnual && (
              <div className="plan-billing annual">
                per month, billed annually ($2,511/year)
              </div>
            )}
            <div className="plan-limit">Up to $7,000 ad spend/month</div>

            <div className="feature-list">
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Bi-weekly account manager meeting</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Free audit</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI agent reporting & action</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Full funnel ads launch pack</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Facebook & Instagram ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Google ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>24/7 ad optimization</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI traffic funnels</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI remarketing audiences</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI catalog creatives</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Actionable growth tips</span>
              </div>
            </div>

            <a href="#" className="cta-button no-underline">
              Get Started
            </a>
          </div> */}

          {/* <div className="pricing-card" id="premium-plan">
            <h2 className="plan-name">Premium</h2>
            {!isAnnual && <div className="plan-price monthly">$499</div>}
            {isAnnual && <div className="plan-price annual">$349</div>}
            {!isAnnual && <div className="plan-billing monthly">per month</div>}
            {isAnnual && (
              <div className="plan-billing annual">
                per month, billed annually ($4,191/year)
              </div>
            )}
            <div className="plan-limit">Up to $15,000 ad spend/month</div>

            <div className="feature-list">
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Dedicated account manager</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Free audit</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI agent reporting & action</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Full funnel ads launch pack</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Facebook & Instagram ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AGEN-AI Google ads</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>24/7 ad optimization</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI traffic funnels</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI remarketing audiences</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>AI catalog creatives</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check feature-icon"></i>
                <span>Actionable growth tips</span>
              </div>
            </div>

            <a href="#" className="cta-button no-underline">
              Get Started
            </a>
          </div> */}
        </div>

        <div className="enterprise-section">
          <h2 className="enterprise-title">Need a Custom Solution?</h2>
          <p className="enterprise-text">
            Contact us for Enterprise-level pricing and custom features tailored
            to your specific business requirements.
          </p>
          <a
            href="#"
            className="cta-button no-underline"
            style={{ maxWidth: "300px", margin: "0 auto" }}
          >
            Contact for Enterprise Pricing
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PricingPage
