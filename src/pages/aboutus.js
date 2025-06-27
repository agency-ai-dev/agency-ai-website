import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./aboutstyles.css"
import john from "./../images/john.jpg"
import joe from "./../images/joe.jpg"
import anthony from "./../images/anthony.png"
import Footer from "../components/footer"
import Header from "../components/header"
import { Link } from "gatsby"

const ContactUsPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className="pdf-container">
      <Header />
      <div className="min-h-screen">
        <section className="pt-16 px-6 md:px-12 lg:px-24 md:pt-24 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ABOUT
            <br />
            <span className="highlight-purple">AGENCY AI</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl opacity-90 mb-12">
            Our mission is to help Shopify store owners and their teams simplify
            marketing and grow faster by leveraging AI technology.
          </p>
        </section>

        <section className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="card p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              From Our Store to Yours: Marketing Reimagined.
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Ever feel like you need a full-scale marketing agency, but it's
              just not in the budget or you're tired of explaining your vision?
              We've been there. In fact, we built an 8-figure Shopify brand from
              the ground up, experiencing every triumph and frustration that
              comes with scaling an eCommerce business. That journey, filled
              with countless hours of marketing strategy, campaign management,
              and a relentless pursuit of efficiency, led us to a powerful
              realization: <b>there had to be a better way. </b>
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">
              Introducing Agency: The Shopify App Born from Real-World Success &
              AI Innovation
            </h2>
            <p className="mb-6 text-lg opacity-90">
              Agency isn't just another app; it's the culmination of our{" "}
              <b>20+ years of collective experience</b> at the forefront of
              eCommerce. We've not only built successful Shopify apps relied
              upon by thousands of merchants daily, but we've also walked in
              your shoes, scaling multiple Shopify stores into thriving
              businesses. We're even Shopify-recognized Experts, having
              developed groundbreaking solutions like the platform's first-ever
              performance analysis tool.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-8">
              Why Does This Matter For You?
            </h3>
            <ul className="list-disc pl-6 mb-12 space-y-2 text-lg opacity-90">
              <li>
                <b>Benefit from Our Blueprint:</b> We've poured our hard-earned
                knowledge – the strategies that built our 8-figure brand – into
                Agency. It's designed to think like a strategic marketing
                agency, creating and optimizing multi-channel campaigns based on
                your unique industry, products, and goals.
              </li>
              <li>
                <b>AI-Powered, Human-Perfected:</b> We combine the raw power of
                cutting-edge AI with the nuanced understanding that only comes
                from years of in-the-trenches eCommerce marketing. This means
                smarter campaigns, better results, and continuous improvement.
              </li>
              <li>
                <b>Your Growth Partner:</b> As entrepreneurs who have navigated
                the startup world and scaled businesses, we're passionate about
                empowering others. Agency is built to help businesses of all
                sizes operate more efficiently and effectively, giving you back
                time and resources to focus on what you do best.
              </li>
            </ul>
            <p className="mb-6 text-lg opacity-90">
              <b>
                Agency is more than just software; it's a strategic advantage,
                built by Shopify veterans for Shopify visionaries.
              </b>
            </p>
          </div>
        </section>

        <section className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Meet Our <span className="highlight-teal">Founders</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 flex flex-col items-center text-center">
              <img src={anthony} alt="Anthony" className="founder-img mb-6" />
              <h3 className="text-2xl font-bold highlight-purple mb-1">
                Anthony
              </h3>
              <p className="text-lg mb-4 opacity-80">CEO, Founder</p>
              <p className="opacity-90">
                Anthony brings 13 years of experience in the Shopify ecosystem,
                honing his skills in eCommerce marketing while building,
                scaling, and managing numerous successful stores. His passion
                lies at the intersection of marketing technology and AI.
              </p>
              <p className="mt-4 opacity-80">
                When unplugged, he loves traveling, beaches, and quality time
                with his canine companion.
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center">
              <img src={john} alt="John" className="founder-img mb-6" />
              <h3 className="text-2xl font-bold highlight-purple mb-1">John</h3>
              <p className="text-lg mb-4 opacity-80">CTO, Lead Engineer</p>
              <p className="opacity-90">
                John is a full-stack developer with over 6 years of experience.
                He's worked at Shopify agencies, consulted for Fortune 500
                companies, and contributed to early-stage startups.
              </p>
              <p className="mt-4 opacity-80">
                In his free time, he enjoys playing pickleball, relaxing in the
                sauna, and spending time with his wife and daughter.
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center">
              <img src={joe} alt="Joe" className="founder-img mb-6" />
              <h3 className="text-2xl font-bold highlight-purple mb-1">Joe</h3>
              <p className="text-lg mb-4 opacity-80">
                Chief Software Architect, Technical Advisor
              </p>
              <p className="opacity-90">
                Joe's an expert Shopify app developer, 7 year eCommerce store
                owner, former Shopify optimization agency owner, and the Founder
                / CTO of Automator Apps.
              </p>
              <p className="mt-4 opacity-80">
                Outside of tech he's into nature adventures, travel, trees,
                music, books, and art.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to transform your{" "}
            <span className="highlight-teal">marketing</span>?
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 opacity-90">
            Start using Agency AI today to simplify + automate your marketing
            workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              target="_blank"
              href="http://calendly.com/agency-demo"
              className="btn-primary px-8 py-3 rounded-md font-semibold text-lg no-underline"
            >
              Book a Demo
            </a>
            <Link
              to="/comingsoon"
              className="btn-secondary px-8 py-3 rounded-md font-semibold text-lg text-white no-underline"
            >
              Start Free Trial
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default ContactUsPage
