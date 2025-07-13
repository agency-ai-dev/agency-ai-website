import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "./privacypolicystyles.css"

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1 className="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-updated">Updated July 13 2025</p>
        </div>

        <div className="privacy-policy-content">
          <p>
            Agency AI (“the App”) provides marketing services (“the Service”) to
            merchants who use Shopify to power their stores. This Privacy Policy
            describes how personal information is collected, used, and shared
            when you install or use the App in connection with your
            Shopify-supported store.
          </p>

          <h2>Personal Information the App Collects</h2>
          <p>
            After installing the App you will be shown the most up-to-date
            Shopify and third-party permissions required for the App to
            function. You may accept or decline. If you decline, installation is
            aborted; if you uninstall later, Shopify automatically revokes our
            store token and we erase your App configuration from our systems.
          </p>
          <p>In broad terms the App can access:</p>
          <ul>
            <li>Basic Shopify store metadata (store email, locale, etc.).</li>
            <li>
              Operational data needed for App features (orders, customers,
              products, etc.).
            </li>
            <li>
              Connected third-party marketing assets (e.g. Meta ad accounts,
              catalog items, page insights) as detailed below.
            </li>
          </ul>

          <h2>Meta (Facebook & Instagram) Permissions We Request</h2>
          <p>
            When you connect a Facebook or Instagram account we obtain an access
            token with <em>only</em> the scopes you approve. We currently
            request the following Marketing-API and Graph-API permissions:
          </p>
          <ul>
            <li>
              <strong>pages_show_list</strong> – lets us show you the list of
              Facebook Pages you manage so you can pick which one to advertise
              from.
            </li>
            <li>
              <strong>pages_manage_ads</strong> – lets the App create and edit
              ads that run from your Page.
            </li>
            <li>
              <strong>ads_management</strong> – enables full read/write access
              to your selected ad account(s) for campaign, ad-set, ad and
              creative management.
            </li>
            <li>
              <strong>catalog_management</strong> – lets us sync products from
              your catalog so you can run dynamic-product ads.
            </li>
            <li>
              <strong>business_management</strong> – allows the App to read and,
              where explicitly triggered, write Business Manager assets (pixels,
              catalogs, ad accounts).
            </li>
            <li>
              <strong>read_insights</strong> – grants aggregated performance
              metrics (impressions, clicks, cost) for the Pages and ad accounts
              you connected.
            </li>
            <li>
              <strong>pages_read_engagement</strong> – provides public
              engagement stats (likes, comments, shares) so we can surface
              creative-level analytics.
            </li>
            <li>
              <strong>instagram_basic</strong> – gives basic profile and media
              metadata for your linked Instagram Business account.
            </li>
          </ul>
          <p>
            You can revoke access at any time via Facebook “Business
            Integrations”.
          </p>

          <h2>How Do We Use Your Information?</h2>
          <p>We use the data mentioned above solely to:</p>
          <ul>
            <li>Provide, troubleshoot, and improve the App &amp; Service;</li>
            <li>Create and optimize ad campaigns and product-catalog feeds;</li>
            <li>Generate performance dashboards and send you reports;</li>
            <li>Communicate important product updates.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>
            We do <em>not</em> sell or rent your data. We only share information
            with third parties when it is essential to operate the Service or
            when required by law (e.g. subpoenas or lawful requests).
          </p>

          <h2>Your Rights</h2>
          <p>
            You can request access to, correction of, or deletion of the
            personal information we hold about you at any time. Contact us using
            the details below.
          </p>

          {/* <h2>Data Retention</h2>
          <p>
            • Shopify tokens are deleted automatically when you uninstall.
            <br />
            • Meta access tokens and all related cached metrics are purged
            within 48 hours of disconnecting the account or uninstalling the
            App.
            <br />• Aggregated, non-identifiable analytics may be retained for
            product benchmarking.
          </p> */}

          <h2>Changes</h2>
          <p>
            We may update this Privacy Policy as our practices, or applicable
            laws and regulations, evolve. We will post the revised version and
            adjust the “Updated” date above.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions or opt-out requests? Reach us at{" "}
            <a href="/contactus">agencyai.app/contact</a> or by mail:
          </p>

          <div className="contact-info">
            <p>
              <strong>Agency AI, LLC</strong>
            </p>
            <p>30 N Gould St Ste R</p>
            <p>Sheridan, WY 82801</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
