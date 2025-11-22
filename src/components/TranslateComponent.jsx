import { useEffect } from "react"

const TranslateComponent = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    document.body.appendChild(script)

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-undef
      new google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,ca,en,fr,de",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      )
    }
  }, [])

  return <div id="google_translate_element"></div>
}

export default TranslateComponent
