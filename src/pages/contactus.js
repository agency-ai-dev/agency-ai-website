import * as React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./contactstyles.css"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactUsPage = () => {
  const [openIndex, setOpenIndex] = React.useState(null)

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly can I get started with Agency AI?",
      answer:
        "You can get started with Agency AI in minutes. After connecting your store, our onboarding manager will help you set up your first campaigns quickly.",
    },
    {
      question: "What platforms does Agency AI integrate with?",
      answer:
        "Agency AI integrates seamlessly with Shopify, Meta (Facebook & Instagram), and Google Ads platforms with more integrations coming soon.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Agency AI offers flexible pricing plans based on your store's needs. Contact us for a custom quote tailored to your business size and requirements.",
    },
  ]

  return (
    <div className="pdf-container">
      <Header />
      <div className="antialiased">
        <main className="container mx-auto px-4 py-8 sm:py-12 desktop-container">
          <section className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready To Take Your Business To The{" "}
              <span className="gradient-text">Next Level?</span>
            </h1>
          </section>

          <section className="max-w-xl mx-auto lg:max-w-none mb-10 transform hover:-translate-y-1 transition-transform">
            <div className="card-highlight p-6 sm:p-8 text-center">
              <div className="flex flex-col items-center">
                <div className="circle-icon-highlight">
                  <i className="fas fa-calendar-check text-black text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mb-3">Book A Demo</h2>
                <p className="text-gray-100 mb-5 max-w-lg mx-auto">
                  See how Agency AI can transform your marketing strategy with
                  our powerful AI-driven platform. Get a personalized
                  walkthrough in just 15 minutes.
                </p>
                <button className="btn-highlight py-3 px-8 rounded-lg text-black font-semibold text-lg">
                  <a
                    target="_blank"
                    href="http://calendly.com/agency-demo"
                    className="decoration-none text-white no-underline"
                  >
                    Schedule Your Demo Now
                  </a>
                </button>
              </div>
            </div>
          </section>

          <div className="lg:desktop-grid">
            <section className="max-w-xl mx-auto lg:max-w-none mb-16">
              <div className="card p-6 sm:p-8">
                <form className="space-y-6">
                  <div>
                    <label
                      for="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full py-3 px-6 rounded-lg font-medium text-black text-center"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </section>

            <section className="space-y-8">
              <div className="max-w-xl mx-auto lg:max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="card p-4 sm:p-6">
                      <button
                        className="accordion-trigger w-full flex justify-between items-center"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="font-medium text-left">
                          {faq.question}
                        </span>
                        <i
                          className={`fas fa-chevron-down text-teal-400 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      {openIndex === index && (
                        <div className="pt-4 text-gray-300">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default ContactUsPage
