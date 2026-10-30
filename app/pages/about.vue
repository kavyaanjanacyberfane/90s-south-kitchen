<script setup>
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(
  runtimeConfig.public.siteUrl || "https://90ssouthkitchen.com",
);
const title = "Our Story | 90's South Kitchen";
const description =
  "Discover the nostalgic inspiration behind 90's South Kitchen at Dining District in Patancheru, Hyderabad — a celebration of South Indian flavours and togetherness.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/images/90s-south-kitchen-cover.png`,
  ogUrl: `${siteUrl}/about`,
  twitterCard: "summary_large_image",
});
useHead({ link: [{ rel: "canonical", href: `${siteUrl}/about` }] });
useSchemaOrg([
  {
    "@type": "WebPage",
    "@id": `${siteUrl}/about#webpage`,
    name: title,
    description,
    url: `${siteUrl}/about`,
    isPartOf: { "@id": `${siteUrl}/#website` },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Story",
        item: `${siteUrl}/about`,
      },
    ],
  },
]);
</script>
<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-pattern" aria-hidden="true"></div>
      <div class="container page-hero-content">
        <p class="eyebrow">A story seasoned with nostalgia</p>
        <h1>Rooted in the past.<em>Made for today.</em></h1>
        <p>
          Some of our happiest memories begin around a table. That's the feeling
          we want to bring to every visit.
        </p>
        <div class="breadcrumbs">
          <NuxtLink to="/">Home</NuxtLink><span>／</span><span>Our Story</span>
        </div>
      </div>
    </section>
    <section class="section-pad story-section">
      <div class="container story-grid">
        <div class="story-image">
          <img
            src="https://c.stocksy.com/a/69gH00/z0/4213588.jpg"
            alt="A warm, shared meal with colourful dishes"
            width="800"
            height="900"
            loading="lazy"
          /><span class="story-image-seal"
            >✦<br />Since<br />the good<br />old days</span
          >
        </div>
        <div class="story-copy">
          <p class="eyebrow">Why 90's South Kitchen?</p>
          <h2>Because the best things<br /><em>feel like home.</em></h2>
          <p>
            The 90s remind us of simpler joys — family recipes, unhurried
            conversations, and the comforting sounds and smells of a busy
            kitchen. Our identity celebrates that warm, familiar spirit through
            South Indian food culture and a vintage-inspired atmosphere.
          </p>
          <p>
            We are building a place for people to reconnect, share a meal, and
            make fresh memories. Whether you're stopping by or planning a
            gathering, we want you to feel welcome from the moment you arrive.
          </p>
          <div class="quote-card">
            <span>“</span>
            <p>Good food tastes even better when there's a story behind it.</p>
          </div>
          <NuxtLink class="button button-primary" to="/request-a-quote"
            >Plan something special <span>↗</span></NuxtLink
          >
        </div>
      </div>
    </section>
    <section class="values-section section-pad">
      <div class="container">
        <div class="section-heading centered">
          <p class="eyebrow">Our little philosophy</p>
          <h2>Three things we <em>believe in.</em></h2>
        </div>
        <div class="values-grid">
          <article>
            <span class="value-icon">✺</span>
            <h3>Honour tradition</h3>
            <p>
              Celebrate the food memories, flavours and customs that bring us
              back to our roots.
            </p>
          </article>
          <article>
            <span class="value-icon">♡</span>
            <h3>Make room for everyone</h3>
            <p>
              Good meals are meant to be shared, with space for stories,
              laughter and connection.
            </p>
          </article>
          <article>
            <span class="value-icon">✦</span>
            <h3>Keep it memorable</h3>
            <p>
              Bring a little charm to everyday moments and make every gathering
              feel special.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
