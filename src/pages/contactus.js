import * as React from "react"
import { useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./contactstyles.css"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactUsPage = () => {
  const [openIndex, setOpenIndex] = React.useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [messageType, setMessageType] = useState(null) // 'success', 'error', or null
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear messages when user starts typing
    if (messageType) {
      setMessageType(null)
      setMessage("")
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    e.stopPropagation()
    setIsLoading(true)
    setMessageType(null) // Clear previous messages
    setMessage("")
    console.log("Contact form submitted with data:", formData)

    try {
      const response = await fetch(`/api/send-email/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "admin@agencyai.com",
          subject: "Contact Form Submission - Agency AI",
          text: `Name: ${formData.name || "N/A"}\nEmail: ${
            formData.email || "N/A"
          }\nCompany: ${formData.company || "N/A"}\nMessage: ${
            formData.message || "N/A"
          }`,
          type: "general",
          name: formData.name,
          website: "",
        }),
      })

      if (response.ok) {
        console.log("Contact form sent successfully")
        setMessageType("success")
        setMessage(
          "Your message has been sent successfully! We'll be in touch soon."
        )
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        console.error("Failed to send contact form")
        const errorData = await response.text()
        console.error("Error details:", errorData)
        setMessageType("error")
        setMessage("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setMessageType("error")
      setMessage(
        "Network error occurred. Please check your connection and try again."
      )
    }

    setIsLoading(false)
  }

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly can I get started with Agency AI?",
      answer:
        "Getting started takes less than 10 minutes. Simply connect your Meta Ads account, complete our 5-minute onboarding questionnaire, and our AI will have your optimized campaigns ready to launch within 24 hours. No technical setup or complicated integrations required.",
    },
    {
      question: "What platforms does Agency AI currently support?",
      answer:
        "Agency AI currently specializes in Meta advertising (Facebook & Instagram). We're actively developing integrations for Google Ads, TikTok Ads, and other major platforms. Shopify integration is launching soon, with additional ecommerce platforms to follow.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer a single launch plan at $59/month with a 30-day free trial - no tiers or hidden fees. As an early adopter, you'll be grandfathered into this launch pricing even as our rates increase for future customers. Start your free trial today to lock in this exclusive rate.",
    },
    {
      question: "Is my data and ad account information secure?",
      answer:
        "Absolutely. We use enterprise-grade security with 256-bit SSL encryption and follow strict data protection protocols. We never access your payment methods or personal customer data - only the campaign metrics needed for optimization. Your data is never shared with third parties.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "While results vary by business, our AI typically improves campaign performance within the first month. Most users see reduced cost-per-acquisition, improved ROAS, and significant time savings. Our AI continuously learns and optimizes, so performance tends to improve over time.",
    },
    {
      question: "Do I maintain control over my campaigns?",
      answer:
        "Yes, you maintain full control. You can set spending limits, pause campaigns, and adjust targeting parameters anytime. Our AI handles the optimization and management, but you're always in the driver's seat for major decisions.",
    },
    {
      question: "What if I need help or have questions?",
      answer:
        "Our support team is available via email and chat during business hours. We also provide comprehensive onboarding support and regular check-ins to ensure you're getting maximum value from the platform.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, there are no long-term contracts. You can pause or cancel your subscription at any time. If you cancel, you'll retain access through the end of your current billing period.",
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

          <section className="max-w-xl mx-auto lg:max-w-[70%] mb-10 transform hover:-translate-y-1 transition-transform">
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
                <button className="primary-btn py-3 px-8 rounded-lg text-black font-semibold text-lg">
                  <a
                    target="_blank"
                    href="http://calendly.com/agency-demo"
                    className="decoration-none text-gray-900 no-underline"
                  >
                    Schedule Your Demo Now
                  </a>
                </button>
              </div>
            </div>
          </section>

          <div className="lg:desktop-grid">
            <section className="max-w-xl mx-auto lg:max-w-[70%] mb-16">
              <div className="card p-6 sm:p-8">
                {/* Message Display */}
                {messageType && (
                  <div
                    className={`mb-4 p-4 rounded-lg border ${
                      messageType === "success"
                        ? "bg-green-900/20 border-green-500/50 text-green-300"
                        : "bg-red-900/20 border-red-500/50 text-red-300"
                    }`}
                    role="alert"
                  >
                    <div className="flex items-start">
                      <div className="ml-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {messageType === "success" ? (
                              <i className="fas fa-check-circle text-green-400 text-lg mt-0.5"></i>
                            ) : (
                              <i className="fas fa-exclamation-triangle text-red-400 text-lg mt-0.5"></i>
                            )}
                          </div>
                          <p className="text-sm font-medium mb-0">
                            {messageType === "success" ? "Success!" : "Error"}
                          </p>
                        </div>
                        <p className="text-sm mt-1 mb-1">{message}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="btn-primary w-full lg:w-[60%] py-3 px-6 rounded-lg font-medium text-black text-center"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
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
