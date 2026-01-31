import * as React from "react"
import { navigate } from "gatsby"

const PricingPage = () => {
  React.useEffect(() => {
    navigate("/comingsoon", { replace: true })
  }, [])

  return null
}

export default PricingPage
