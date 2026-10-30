export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gtmId = String(config.public.gtmId || '')
  const gaId = String(config.public.gaMeasurementId || '')
  if (gtmId && !document.querySelector(`[data-gtm="${gtmId}"]`)) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    const script = document.createElement('script')
    script.async = true
    script.dataset.gtm = gtmId
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`
    document.head.appendChild(script)
  }
  if (gaId && !document.querySelector(`[data-ga="${gaId}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.dataset.ga = gaId
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args) }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { anonymize_ip: true })
  }
})
