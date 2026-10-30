<script setup>
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(
  runtimeConfig.public.siteUrl || "https://90ssouthkitchen.com",
);
const title = "Request a Quote | 90's South Kitchen";
const description =
  "Tell 90's South Kitchen about your event or gathering at Dining District, Patancheru, Hyderabad, and request a quote.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/images/90s-south-kitchen-cover.png`,
  ogUrl: `${siteUrl}/request-a-quote`,
  twitterCard: "summary_large_image",
});
useHead({ link: [{ rel: "canonical", href: `${siteUrl}/request-a-quote` }] });
useSchemaOrg([
  {
    "@type": "WebPage",
    "@id": `${siteUrl}/request-a-quote#webpage`,
    name: title,
    description,
    url: `${siteUrl}/request-a-quote`,
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Request a Quote",
        item: `${siteUrl}/request-a-quote`,
      },
    ],
  },
]);
const form = reactive({
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  guests: "",
  details: "",
});
const submitted = ref(false);
function submitRequest() {
  // Demo only: connect this form to your backend, email provider, or CRM before launch.
  submitted.value = true;
}
</script>
<template>
  <div>
    <section class="page-hero compact">
      <div class="page-hero-pattern" aria-hidden="true"></div>
      <div class="container page-hero-content">
        <p class="eyebrow">Your occasion, our pleasure</p>
        <h1>Let's plan something <em>lovely.</em></h1>
        <p>
          Share a few details and we'll have a starting point for your
          gathering.
        </p>
        <div class="breadcrumbs">
          <NuxtLink to="/">Home</NuxtLink><span>／</span
          ><span>Request a Quote</span>
        </div>
      </div>
    </section>
    <section class="section-pad quote-section">
      <div class="container quote-layout">
        <aside class="quote-aside">
          <p class="eyebrow">Make it memorable</p>
          <h2>A good gathering<br />starts with a <em>hello.</em></h2>
          <p>
            Tell us what you're planning — a family get-together, a special
            celebration, or another occasion. These details are a starting point
            and can be updated to match the final service offering.
          </p>
          <div class="quote-aside-note">
            <span>✳</span>
            <p>
              Prefer to speak directly?<br /><a href="tel:+918639408555"
                >Call 086394 08555</a
              >
            </p>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/068/778/756/small/traditional-south-indian-meal-served-on-banana-leaf-with-rice-and-delicacies-photo.jpeg"
            alt="A shared meal set for a gathering"
            width="560"
            height="420"
            loading="lazy"
          />
        </aside>
        <div class="form-card">
          <div v-if="submitted" class="success-message" role="status">
            <span>✓</span>
            <h2>Thank you!</h2>
            <p>
              Your form is working in demo mode, but it has not been sent to a
              business inbox yet. Connect a backend or email service before
              going live.
            </p>
            <button
              class="button button-outline"
              type="button"
              @click="submitted = false"
            >
              Back to form
            </button>
          </div>
          <form v-else @submit.prevent="submitRequest">
            <p class="eyebrow">Tell us about your plans</p>
            <h2>Request a quote</h2>
            <p class="form-intro">Fields marked * are required.</p>
            <div class="form-grid">
              <label
                >Your name *<input
                  v-model.trim="form.name"
                  name="name"
                  autocomplete="name"
                  required
                  placeholder="Full name" /></label
              ><label
                >Phone number *<input
                  v-model.trim="form.phone"
                  name="phone"
                  autocomplete="tel"
                  type="tel"
                  required
                  placeholder="Your contact number" /></label
              ><label
                >Email address<input
                  v-model.trim="form.email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  placeholder="you@example.com" /></label
              ><label
                >Type of occasion *<select
                  v-model="form.eventType"
                  name="eventType"
                  required
                >
                  <option value="" disabled>Select an occasion</option>
                  <option>Family gathering</option>
                  <option>Birthday celebration</option>
                  <option>Corporate event</option>
                  <option>Private event</option>
                  <option>Other</option>
                </select></label
              ><label
                >Preferred date<input
                  v-model="form.date"
                  name="date"
                  type="date" /></label
              ><label
                >Estimated guests<input
                  v-model="form.guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="e.g. 30" /></label
              ><label class="full-field"
                >Tell us more<textarea
                  v-model.trim="form.details"
                  name="details"
                  rows="4"
                  placeholder="Share any details that will help us understand your plans"
                ></textarea>
              </label>
            </div>
            <p class="privacy-note">
              Your information will only be used to follow up on this request
              once the form is connected to a submission service.
            </p>
            <button class="button button-primary submit-button" type="submit">
              Send quote request <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
