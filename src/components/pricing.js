// TEMPORARY COMPONENT FOR VISION PAGE

import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../pages/pricingstyles.css"
import agencyailogo from "../images/agencyailogo.png"
import Footer from "./footer"
import Header from "./header"

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="py-12 md:py-20">
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

      <div className="pricing-grid vision-page">
        <div className="pricing-card" id="growth-plan">
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

          <a
            target="_blank"
            href="https://calendly.com/agency-demo/agency-ai-investor-brief"
            className="cta-button no-underline"
          >
            Request Demo
          </a>
        </div>

        <div className="pricing-card recommended" id="pro-plan">
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
            <div className="feature-separator">Everything in Growth, plus:</div>

            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Email marketing</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>AGEN-AI TikTok ads</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>AGEN-AI Snapchat ads</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Advanced audience segmentation</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Priority support</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Monthly account manager meeting</span>
            </div>
          </div>

          <a
            target="_blank"
            href="https://calendly.com/agency-demo/agency-ai-investor-brief"
            className="cta-button no-underline"
          >
            Request Demo
          </a>
        </div>

        <div className="pricing-card" id="premium-plan">
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
            <div className="feature-separator">Everything in Pro, plus:</div>

            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>AI Creative Studio (included)</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Dedicated account manager</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>Custom campaign strategies</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>White-label reporting</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check feature-icon"></i>
              <span>AGEN-AI Custom Mindsets</span>
            </div>
          </div>

          <a
            target="_blank"
            href="https://calendly.com/agency-demo/agency-ai-investor-brief"
            className="cta-button no-underline"
          >
            Request Demo
          </a>
        </div>
      </div>

      <div className="addons-section">
        <h2 className="addons-title">Add-On Options</h2>
        <p className="addons-subtitle">
          Enhance any plan with these powerful add-ons
        </p>

        <div className="addons-grid">
          <div className="addon-card">
            <h3 className="addon-name">AI Creative Studio</h3>
            <div className="addon-price">
              $149<span className="addon-period">/month</span>
            </div>
          </div>

          <div className="addon-card">
            <h3 className="addon-name">Advanced A/B Testing Suite</h3>
            <div className="addon-price">
              Starting at $79<span className="addon-period">/month</span>
            </div>
          </div>

          <div className="addon-card">
            <h3 className="addon-name">SMS Marketing</h3>
            <div className="addon-price">
              Starting at $49<span className="addon-period">/month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="enterprise-section">
        <h2 className="enterprise-title">Need a Custom Solution?</h2>
        <p className="enterprise-text">
          Contact us for Enterprise-level pricing and custom features tailored
          to your specific business requirements.
        </p>
        <a
          target="_blank"
          href="https://calendly.com/agency-demo/agency-ai-investor-brief"
          className="cta-button no-underline"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          Contact for Enterprise Pricing
        </a>
      </div>
    </div>
  )
}

export default PricingPage
