<script setup>
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(
  runtimeConfig.public.siteUrl || "https://90ssouthkitchen.com",
);
const title =
  "90's South Kitchen | Traditional South Indian Veg & Non-Veg Restaurant";
const description =
  "Discover nostalgic South Indian vegetarian and non-vegetarian favourites at 90's South Kitchen, Dining District, Patancheru Industrial Area, Hyderabad. Call 086394 08555 for enquiries and gatherings.";
useSeoMeta({
  title,
  description,
  keywords:
    "90's South Kitchen, South Indian restaurant, vegetarian and non vegetarian restaurant, South Indian food, Dining District, Patancheru, Hyderabad",
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/images/90s-south-kitchen-cover.png`,
  ogUrl: siteUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/images/90s-south-kitchen-cover.png`,
});
useHead({ link: [{ rel: "canonical", href: `${siteUrl}/` }] });
useSchemaOrg([
  {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "90's South Kitchen",
    url: siteUrl,
    description,
  },
  {
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    name: title,
    url: `${siteUrl}/`,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
  },
  {
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: "90's South Kitchen",
    url: siteUrl,
    image: `${siteUrl}/images/90s-south-kitchen-cover.png`,
    telephone: "+918639408555",
    servesCuisine: ["South Indian", "Indian"],
    acceptsReservations: true,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dining District, Patancheru Industrial Area",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "502319",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Dining District",
      url: "https://diningdistrict.in/",
    },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    ],
  },
]);
const highlights = [
  {
    number: "01",
    title: "South Indian classics",
    text: "Familiar tiffin favourites, comforting meals and the flavours we grew up with.",
  },
  {
    number: "02",
    title: "Vegetarian & non-vegetarian",
    text: "A table with choices for everyone, from veg favourites to hearty non-veg dishes.",
  },
  {
    number: "03",
    title: "Gather around",
    text: "A welcoming spot for family meals, friends, celebrations and group get-togethers.",
  },
];
const dishes = [
  {
    name: "Breakfast favourites",
    note: "Golden dosa, idli and chutneys to start the day",
    image:
      "https://t3.ftcdn.net/jpg/22/04/67/52/360_F_2204675265_WdMsGLbC44iHKc4DZYQELpGBDCrdfJ4P.jpg",
    alt: "Crisp golden South Indian dosa with chutneys",
  },
  {
    name: "South Indian thali",
    note: "A colourful, comforting spread of regional flavours",
    image:
      "https://t4.ftcdn.net/jpg/02/75/39/13/360_F_275391367_Hro3Ql1iFsCNtd86zWYuqa0Qe5cc7goE.jpg",
      alt: "Traditional Indian thali served with several dishes",
  },
  {
    name: "Dum biryani",
    note: "Aromatic rice layered with spices and rich flavour",
    image:
      "https://img.magnific.com/premium-photo/plate-food-with-noodles-meat-vegetables_1197144-525.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Aromatic biryani rice served as a hearty meal",
  },
  {
    name: "Chicken specialities",
    note: "Hearty non-vegetarian favourites with bold spices",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2021/06/Desi-Chicken-Curry-2-1.jpg",
    alt: "Indian chicken curry with traditional spices",
  },
];
</script>

<template>
  <div class="home-refresh">
    <section class="fresh-hero">
      <div class="fresh-hero-copy">
        <p class="fresh-kicker">
          <span class="kicker-dot"></span> A LITTLE NOSTALGIA, A LOT OF FLAVOUR
        </p>
        <h1>South Indian soul.<br /><em>Served with nostalgia.</em></h1>
        <p class="fresh-intro">
          From comforting breakfast classics and colourful South Indian thalis
          to aromatic biryanis, discover familiar flavours made for sharing. A
          welcoming table for vegetarian and non-vegetarian food lovers alike.
        </p>
        <div class="fresh-actions">
          <NuxtLink class="button button-primary" to="/menu"
            >Explore the menu <span>→</span></NuxtLink
          ><NuxtLink class="fresh-text-link" to="/request-a-quote"
            >Planning a gathering? <span>↗</span></NuxtLink
          >
        </div>
        <div class="fresh-location">
          <span class="location-mark">⌖</span
          ><span
            ><strong>Find us at Dining District</strong
            ><small>Patancheru Industrial Area, Hyderabad</small></span
          >
        </div>
      </div>
      <div class="fresh-hero-image">
        <img
          src="/Grand South Indian Brass Thali Feast.png"
          alt="Traditional South Indian thali with colourful regional dishes"
          width="1200"
          height="1050"
          fetchpriority="high"
        />
        <div class="hero-image-stamp">
          <span>90’s</span><small>South Kitchen</small>
        </div>
        <div class="hero-image-caption">
          <span>CLASSIC FLAVOURS</span><i></i><span>MEMORIES AT THE TABLE</span>
        </div>
      </div>
      <div class="hero-bottom-kolam" aria-hidden="true"></div>
    </section>

    <section class="fresh-intro-band">
      <p>South Indian comfort</p>
      <span aria-hidden="true">✦</span>
      <p>Veg & non-veg favourites</p>
      <span aria-hidden="true">✦</span>
      <p>Made for sharing</p>
    </section>

    <section class="fresh-story section-pad">
      <div class="story-art-wrap">
        <img
          src="/Hearty Indian Non-Vegetarian Thali Feast.png"
          alt="Traditional Indian snacks ready to share"
          width="760"
          height="850"
          loading="lazy"
        />
        <div class="story-art-note">
          <span>Our Flavours</span><small>Our kind of comfort</small>
        </div>
      </div>
      <div class="fresh-story-copy">
        <p class="eyebrow">A little about us</p>
        <h2>Not just a meal.<br /><em>A memory in the making.</em></h2>
        <p>
          There is something special about a table full of familiar flavours,
          stories that run long and one more serving offered with a smile. 90’s
          South Kitchen celebrates that feeling with a menu that welcomes
          vegetarian and non-vegetarian diners alike.
        </p>
        <p>
          Come by for a casual meal or get in touch to plan a get-together at
          Dining District.
        </p>
        <NuxtLink class="button button-outline" to="/about"
          >Our story <span>→</span></NuxtLink
        >
      </div>
      <div class="story-kolam-corner" aria-hidden="true"></div>
    </section>

    <section class="fresh-highlights">
      <div class="fresh-section-heading">
        <p class="eyebrow">The good things</p>
        <h2>Familiar flavours. <em>Lovely little moments.</em></h2>
        <p>
          Simple pleasures, generous plates and room for everyone at the table.
        </p>
      </div>
      <div class="highlight-grid">
        <article v-for="item in highlights" :key="item.number">
          <span class="highlight-number">{{ item.number }}</span>
          <div class="highlight-motif" aria-hidden="true">⌘</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="fresh-menu-preview">
      <div class="menu-preview-heading">
        <div>
          <p class="eyebrow">A taste of the menu</p>
          <h2>From breakfast<br />to <em>biryani.</em></h2>
        </div>
        <NuxtLink class="fresh-text-link" to="/menu"
          >Explore our menu <span>→</span></NuxtLink
        >
      </div>
      <div class="fresh-dish-grid">
        <article
          v-for="dish in dishes"
          :key="dish.name"
          class="fresh-dish-card"
        >
          <div class="fresh-dish-image">
            <img
              :src="dish.image"
              :alt="dish.alt"
              width="600"
              height="450"
              loading="lazy"
            /><span class="dish-number">0{{ dishes.indexOf(dish) + 1 }}</span>
          </div>
          <div class="fresh-dish-copy">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.note }}</p>
          </div>
        </article>
      </div>
      <p class="menu-note">
        Menu availability may vary. Contact us for current dishes and group
        dining enquiries.
      </p>
    </section>

    <section class="fresh-visit">
      <div class="visit-kolam" aria-hidden="true"></div>
      <div class="fresh-visit-copy">
        <p class="eyebrow">Your table is waiting</p>
        <h2>Bring everyone<br /><em>to the table.</em></h2>
        <p>
          Visit us at Dining District or tell us about your next family meal,
          celebration or group gathering.
        </p>
        <a
          class="button button-primary"
          href="https://diningdistrict.in/"
          target="_blank"
          rel="noopener noreferrer"
          >Discover Dining District <span>↗</span></a
        >
        <div class="visit-details">
          <a href="tel:+918639408555">☎ &nbsp;086394 08555</a
          ><span>Patancheru Industrial Area, Hyderabad, Telangana 502319</span>
        </div>
      </div>
      <a
        class="fresh-visit-image"
        href="https://diningdistrict.in/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Dining District website"
        ><img
          src="/Heritage South Indian Feast.png"
          alt="Warm restaurant dining space"
          width="900"
          height="720"
          loading="lazy"
        /><span>Explore Dining District ↗</span></a
      >
    </section>
  </div>
</template>
