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
      <Header waitlist={true} />
      <div className="min-h-screen">
        <section className="pt-16 px-6 md:px-12 lg:px-24 md:pt-24 max-w-7xl mx-auto lg:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ABOUT
            <br />
            <span className="highlight-purple">AGENCY AI</span>
          </h1>
          <p className="text-lg md:text-xl max-w-4xl opacity-90 mb-12 lg:text-center lg:w-2/3 lg:mx-auto">
            Our mission is to help Shopify store owners and their teams automate
            growth by leveraging AI technology.
          </p>
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
              <p className="opacity-90 text-left">
                Anthony brings 13 years of experience in the Shopify ecosystem,
                honing his skills in eCommerce marketing while building,
                scaling, and managing numerous successful stores. His passion
                lies at the intersection of marketing technology and AI.
              </p>
              <p className="mt-4 opacity-80 text-left">
                When unplugged, he loves traveling, beaches, and quality time
                with his canine companion.
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center">
              <img src={john} alt="John" className="founder-img mb-6" />
              <h3 className="text-2xl font-bold highlight-purple mb-1">John</h3>
              <p className="text-lg mb-4 opacity-80">CTO, Lead Engineer</p>
              <p className="opacity-90 text-left">
                John is a full-stack engineer with 6+ years of experience
                consulting for companies ranging from SMBs to F500, and building
                at Shopify agencies and early-stage startups. He has deep A/B
                testing expertise driving multimillion-dollar impact.
              </p>
              <p className="mt-4 opacity-80 text-left">
                Outside of work, you’ll find John unwinding in the sauna, or
                spending time with his wife, daughter, and 3 dogs.
              </p>
            </div>

            <div className="card p-8 flex flex-col items-center text-center">
              <img src={joe} alt="Joe" className="founder-img mb-6" />
              <h3 className="text-2xl font-bold highlight-purple mb-1">Joe</h3>
              <p className="text-lg mb-4 opacity-80">
                Chief Software Architect, Technical Advisor
              </p>
              <p className="opacity-90 text-left">
                Joe's an expert Shopify app developer, 7 year eCommerce store
                owner, former Shopify optimization agency owner, and the Founder
                / CTO of Automator Apps.
              </p>
              <p className="mt-4 opacity-80 text-left">
                Outside of tech he's into nature adventures, travel, trees,
                music, books, and art.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="card p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              The Problem We're Solving
            </h2>
            <p className="m-auto mb-10 text-lg opacity-90">
              We've seen too many brilliant business owners spending countless
              hours manually managing their ad campaigns instead of focusing on
              what they do best, which is growing their business.
              <br />
              <br />
              The current landscape forces entrepreneurs to choose between
              expensive agencies, hiring specialists, or becoming marketing
              experts themselves. None of these options are ideal.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-center">
              Our Solution
            </h2>
            <p className="m-auto mb-10 text-lg opacity-90">
              Agency AI was born from the belief that advanced growth automation
              should be accessible to every business, not just enterprises with
              massive budgets.
              <br />
              <br />
              We're building AI that doesn't just automate. It thinks, learns,
              and optimizes like the best marketing teams, but works 24/7
              without the overhead.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-center">
              Our Values
            </h3>
            <p className="m-auto mb-10 text-lg opacity-90">
              We believe advanced AI marketing and growth automation should be
              accessible to every business, not just enterprises with massive
              budgets. Every feature we build drives real business outcomes
              while continuously learning and evolving from campaign data.
              <br />
              <br />
              We're not just a tool. We're your AI growth partner, democratizing
              cutting-edge technology so any business can compete at the highest
              level.
            </p>
          </div>
        </section>

        {/* <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
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
        </section> */}

        <Footer waitlist={true} />
      </div>
    </div>
  )
}

export default ContactUsPage
