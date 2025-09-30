import React, { useState } from "react"

const WaitlistCard = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState("")

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = e => {
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Silently reject bot submissions without alerting them
      return
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Add small delay to prevent rapid submissions
    setTimeout(() => {
      e.target.submit()
    }, 500)
  }

  return (
    <section className="py-12 px-6 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="card rounded-xl py-8 shadow-2xl border border-purple-500 border-opacity-30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-11/12 m-auto">
              <h2 className="text-[1.65rem] font-bold mb-6">
                Be The First To Experience{" "}
                <span style={{ color: "#00e6b4" }}>
                  AI Powered Growth Automation
                </span>
              </h2>
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Get early access before public launch</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Lock in founder pricing</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-green-400 mr-3 text-xl"></i>
                <span>Shape the product with your feedback</span>
              </div>
            </div>
            <div className="px-6">
              <p className="text-gray-300 mb-6">
                Replace agencies and fragmented tools with one intelligent
                platform that runs your entire growth stack.
              </p>
              <form
                className="space-y-4 flex flex-col items-center"
                action="https://getlaunchlist.com/s/ytbURo"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field - invisible to humans but visible to bots */}
                <input
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                  tabIndex="-1"
                  autoComplete="off"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="form-input w-full px-4 py-3 rounded-lg"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    required
                    minLength="5"
                    maxLength="100"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full px-8 py-4 rounded-xl font-semibold shadow-2xl text-gray-900 text-lg overflow-hidden group relative transition-all duration-300 hover:transform hover:-translate-y-1 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#00e6b4" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to right, #6a59d1, #5a4bc4)",
                    }}
                  ></div>
                  <span className="relative">
                    {isSubmitting ? "Joining..." : "Join the Waitlist"}
                  </span>
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  Get early access and lock in founder pricing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistCard
