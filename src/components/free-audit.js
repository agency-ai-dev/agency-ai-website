import React, { useState, useRef } from "react"

const FreeAudit = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [messageType, setMessageType] = useState(null) // 'success', 'error', or null
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    website: "",
    honeypot: "", // Hidden field for bot detection
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

  // Validation functions
  const isValidWebsiteUrl = url => {
    if (!url) return false

    // Block date patterns like 00/00/00, 01/01/23, etc.
    const datePattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/
    if (datePattern.test(url.trim())) {
      return false
    }

    // Block pure number sequences
    const numberPattern = /^\d+$/
    if (numberPattern.test(url.trim())) {
      return false
    }

    // More flexible URL validation - just needs a domain with extension
    // Accepts: example.com, www.example.com, https://example.com, etc.
    const urlPattern =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/i
    return urlPattern.test(url.trim())
  }

  const validateForm = () => {
    // Check honeypot field (should be empty)
    if (formData.honeypot && formData.honeypot.trim() !== "") {
      console.log("Bot detected: honeypot field filled")
      return { isValid: false, error: "Please try again." }
    }

    // Validate website URL
    if (!isValidWebsiteUrl(formData.website)) {
      return {
        isValid: false,
        error: "Please enter a valid website URL (e.g., yoursite.com)",
      }
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      return { isValid: false, error: "Please enter a valid email address." }
    }

    // Check for minimum name length
    if (formData.name.trim().length < 2) {
      return { isValid: false, error: "Please enter your full name." }
    }

    return { isValid: true }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    e.stopPropagation()

    // Validate form before submission
    const validation = validateForm()
    if (!validation.isValid) {
      setMessageType("error")
      setMessage(validation.error)
      return
    }

    setIsLoading(true)
    setMessageType(null) // Clear previous messages
    setMessage("")

    console.log("Form submitted with data:", formData)

    try {
      const response = await fetch(`/api/send-email/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.email,
          subject: "Free Audit From Agency AI",
          text: "Audit Email Test",
          type: "audit",
          name: formData.name,
          website: formData.website,
        }),
      })

      if (response.ok) {
        console.log("Email sent successfully")
        setMessageType("success")
        setMessage(
          "Your free audit request has been submitted successfully! We'll be in touch soon."
        )
        setFormData({
          email: "",
          name: "",
          website: "",
          honeypot: "",
        })
      } else {
        console.error("Failed to send email")
        const errorData = await response.text()
        console.error("Error response data:", errorData)
        setMessageType("error")
        setMessage(
          "There was an error submitting your request. Please try again."
        )
      }
    } catch (error) {
      console.error("Network error:", error)
      setMessageType("error")
      setMessage(
        "Network error occurred. Please check your connection and try again."
      )
    }
    setIsLoading(false)
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="card rounded-xl p-8 shadow-2xl border border-purple-500 border-opacity-30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Get Your Free <span className="highlight">Marketing Audit</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI will analyze your current marketing strategy and identify
                opportunities for improvement. Receive a custom report with
                actionable insights.
              </p>
              <div className="flex items-center mb-6">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Ad Performance Analysis</span>
              </div>
              <div className="flex items-center mb-6">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Ad Copy Analysis</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Growth Opportunity Identification</span>
              </div>
            </div>
            <div>
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

              <form className="space-y-4">
                {/* Honeypot field - hidden from users but visible to bots */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    visibility: "hidden",
                  }}
                >
                  <label htmlFor="website_url">Website URL (leave blank)</label>
                  <input
                    type="text"
                    id="website_url"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input w-full px-4 py-3 rounded-lg"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input w-full px-4 py-3 rounded-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="website"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="form-input w-full px-4 py-3 rounded-lg"
                    placeholder="https://yourstore.com"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="primary-btn w-full py-3 rounded-lg font-semibold shadow-lg text-lg text-gray-900"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get Free Audit"}
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  No credit card required. Results delivered within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeAudit
