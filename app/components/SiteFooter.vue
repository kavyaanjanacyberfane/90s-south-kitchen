<template>
  <footer class="site-footer">
    <div class="footer-accent" aria-hidden="true"></div>
    <div class="container footer-grid">
      <div class="footer-brand-block">
        <NuxtLink to="/" class="footer-brand"><img src="/images/90s-south-kitchen-logo.svg" alt="90's South Kitchen original logo" width="250" height="62" loading="lazy"></NuxtLink>
        <p>A little nostalgia, a lot of South Indian warmth.</p>
      </div>
      <div><h2>Quick Links</h2><NuxtLink to="/">Home</NuxtLink><NuxtLink to="/about">About</NuxtLink><NuxtLink to="/menu">Menu</NuxtLink><NuxtLink to="/contact">Contact Us</NuxtLink><NuxtLink to="/request-a-quote">Request a Quote</NuxtLink></div>
      <div><h2>Contact</h2><p>Dining District, Patancheru Industrial Area,<br>Hyderabad, Telangana 502319</p><a href="tel:+918639408555">☎ &nbsp;086394 08555</a><a href="https://diningdistrict.in/" target="_blank" rel="noopener noreferrer">Visit Dining District ↗</a></div>
      <div><h2>Find Us</h2><a href="https://www.google.com/maps/search/?api=1&query=Dining+District+Patancheru+Industrial+Area+Hyderabad+Telangana+502319" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a><NuxtLink to="/request-a-quote">Plan a gathering ↗</NuxtLink></div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} 90’s South Kitchen. All rights reserved.</span><span><NuxtLink to="/sitemap.xml">Sitemap</NuxtLink> · Made with a little nostalgia <b>✦</b></span></div>
  </footer>
</template>
