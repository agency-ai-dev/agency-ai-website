const track = (event_name, custom_properties) => {
  if (typeof window !== "undefined" && window.posthog) {
    window.posthog.capture(event_name, custom_properties)
  }
}

export default track
