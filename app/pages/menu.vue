<script setup>
const runtimeConfig = useRuntimeConfig();
const siteUrl = String(
  runtimeConfig.public.siteUrl || "https://90ssouthkitchen.com",
);
const title = "Menu | 90's South Kitchen";
const description =
  "Explore vegetarian and non-vegetarian South Indian favourites at 90's South Kitchen, Dining District, Patancheru Industrial Area, Hyderabad.";
useSeoMeta({ title, description, ogTitle: title, ogDescription: description });
useHead({ link: [{ rel: "canonical", href: `${siteUrl}/menu` }] });
useSchemaOrg([
  { "@type": "WebPage", name: title, description, url: `${siteUrl}/menu` },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: `${siteUrl}/menu`,
      },
    ],
  },
]);
const categories = [
  {
    name: "Breakfast & snacks",
    items: [
      "Idli & chutneys",
      "Medu Vada",
      "Plain Dosa",
      "Masala Dosa",
      "Pesarattu",
      "Pongal",
    ],
  },
  {
    name: "Vegetarian favourites",
    items: [
      "Idli & chutneys",
      "Medu Vada",
      "Plain Dosa",
      "Masala Dosa",
      "Pesarattu",
      "Pongal",
      "Traditional South Indian meals",
    ],
  },
  {
    name: "Non-vegetarian favourites",
    items: [
      "Chicken specials",
      "Mutton specials",
      "Fish dishes",
      "Egg-based favourites",
      "South Indian-style curries",
    ],
  },
  {
    name: "Meals & refreshments",
    items: [
      "Traditional meals",
      "Seasonal rice specials",
      "South Indian filter coffee",
      "Masala tea",
      "Buttermilk",
      "Fresh seasonal drinks",
    ],
  },
];
</script>
<template>
  <div>
    <section class="page-hero menu-page-hero">
      <div class="container page-hero-content">
        <p class="eyebrow">❋ From our kitchen to your table ❋</p>
        <h1>A menu full of <em>familiar favourites.</em></h1>
        <p>
          Vegetarian favourites and hearty non-vegetarian dishes, inspired by
          the South Indian food memories we grew up with.
        </p>
        <div class="breadcrumbs">
          <NuxtLink to="/">Home</NuxtLink><span>◇</span><span>Menu</span>
        </div>
      </div>
    </section>
    <section class="section-pad menu-list-section">
      <div class="container menu-category-grid">
        <article
          v-for="(category, i) in categories"
          :key="category.name"
          class="menu-category"
        >
          <span class="category-number">0{{ i + 1 }}</span>
          <p class="eyebrow">❋ 90’s favourites ❋</p>
          <h2>{{ category.name }}</h2>
          <ul>
            <li v-for="item in category.items" :key="item">
              {{ item }} <span>✦</span>
            </li>
          </ul>
        </article>
      </div>
      <p class="menu-disclaimer">
        This is a sample menu overview. Actual dishes and availability may vary;
        please contact us for the current menu and group dining enquiries.
      </p>
      <div class="menu-quote-link">
        <NuxtLink class="button button-primary" to="/request-a-quote"
          >Plan a gathering <span>→</span></NuxtLink
        >
      </div>
    </section>
  </div>
</template>
