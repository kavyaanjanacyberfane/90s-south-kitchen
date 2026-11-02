<script setup lang="ts">
import { nonVegDishes, vegDishes } from "~/data/menu";
import { quoteLink, site } from "~/data/site";

useSeoMeta({
  title: "South Indian Restaurant in Patancheru, Hyderabad",
  description:
    "Vegetarian and non-vegetarian South Indian classics at Dining District, Patancheru, Hyderabad. Dine with 90's South Kitchen or request a quote for your next gathering.",
  ogTitle: "90's South Kitchen: South Indian dining in Patancheru",
  ogDescription: site.shortDescription,
});

type Category = "veg" | "non-veg";
const category = ref<Category>("veg");
const dishes = computed(() =>
  category.value === "veg" ? vegDishes : nonVegDishes,
);

const highlights = [
  {
    title: "Vegetarian & non-vegetarian",
    text: "Two full kitchens of South Indian favourites, so every table finds something to love.",
    path: "M12 3c3 3 4 6 0 10-4-4-3-7 0-10Zm0 10v8",
  },
  {
    title: "Recipes with nostalgia",
    text: "Dosas, meals and curries made the way they were remembered from the 1990s.",
    path: "M12 8v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  },
  {
    title: "Made for gatherings",
    text: "Dine with family, or ask us for a quote when you are planning a bigger occasion.",
    path: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.500-5 5-5s5 2 5 5m0 0c0-3 2.500-5 5-5s3 2 3 5",
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero scallop-bottom" aria-labelledby="hero-title">
      <div class="container-x section">
        <div class="hero__grid">
          <div>
            <p class="eyebrow eyebrow--left mb-4">
              Dining District &middot; Patancheru
            </p>
            <h1 id="hero-title" class="display-1">
              The taste of the South, the way we remember it.
            </h1>
            <p class="lead mt-5 max-w-xl">
              Crisp dosas, steaming idlis, fiery Andhra curries and full
              banana-leaf meals. Pull up a chair at 90's South Kitchen and bring
              the whole family.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <NuxtLink :to="quoteLink.to" class="btn btn-primary">{{
                quoteLink.label
              }}</NuxtLink>
              <a :href="site.phoneHref" class="btn btn-outline"
                >Call {{ site.phoneDisplay }}</a
              >
            </div>
          </div>

          <div class="relative mx-auto w-full max-w-md">
            <div class="arch">
              <FoodImage
                src="/images/Traditional South Indian Banana-Leaf Feast.png"
                alt="A traditional South Indian meal served on a banana leaf"
                ratio="4 / 5"
                priority
              />
            </div>
            <p class="hero__badge">
              <strong>Veg &amp; Non-Veg</strong>
              South Indian kitchen
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section
      class="section band-sand"
      aria-label="Why dine with us"
      style="padding-block: 3rem"
    >
      <div class="container-x grid gap-8 md:grid-cols-3">
        <div v-for="item in highlights" :key="item.title" class="highlight">
          <span class="highlight__icon" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path :d="item.path" />
            </svg>
          </span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu highlights -->
    <section class="section" aria-labelledby="menu-title">
      <div class="container-x">
        <SectionHeading
          eyebrow="From our kitchen"
          title="Favourites worth coming back for"
          intro="A taste of what we cook. Choose a side and have a look."
        />
        <h2 id="menu-title" class="sr-only-text">Menu highlights</h2>

        <div class="mt-8 flex justify-center">
          <div class="toggle-group" role="group" aria-label="Menu category">
            <button
              type="button"
              :aria-pressed="category === 'veg'"
              @click="category = 'veg'"
            >
              <span class="diet-mark" aria-hidden="true"></span> Vegetarian
            </button>
            <button
              type="button"
              :aria-pressed="category === 'non-veg'"
              @click="category = 'non-veg'"
            >
              <span class="diet-mark diet-mark--non" aria-hidden="true"></span>
              Non-Vegetarian
            </button>
          </div>
        </div>

        <ul
          class="dish-grid mt-10"
          style="list-style: none; padding: 0"
          aria-live="polite"
        >
          <li v-for="dish in dishes" :key="dish.name" class="dish-card">
            <FoodImage :src="dish.image" :alt="dish.name" ratio="4 / 3" />
            <div class="dish-card__body">
              <h3>
                <span
                  class="diet-mark"
                  :class="{ 'diet-mark--non': category === 'non-veg' }"
                  aria-hidden="true"
                ></span>
                {{ dish.name }}
                <span class="sr-only-text"
                  >({{
                    category === "veg" ? "vegetarian" : "non-vegetarian"
                  }})</span
                >
              </h3>
              <p>{{ dish.description }}</p>
            </div>
          </li>
        </ul>

        <p class="mt-8 text-center text-sm text-[var(--color-bark-700)]">
          Dishes and availability may vary. Call us on
          <a :href="site.phoneHref" class="text-link">{{
            site.phoneDisplay
          }}</a>
          to check today's menu.
        </p>
      </div>
    </section>

    <!-- Story teaser -->
    <section class="section band-sand" aria-labelledby="story-title">
      <div
        class="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16"
      >
        <div class="grid grid-cols-5 gap-4">
          <div class="col-span-3">
            <FoodImage
              src="/images/Heritage South Indian Feast.png"
              alt="Warm, cosy dining area at 90's South Kitchen"
              ratio="3 / 4"
              class="rounded-xl"
            />
          </div>
          <div class="col-span-2 self-end">
            <FoodImage
              src="/images/Grand South Indian Brass Thali Feast.png"
              alt="Brass and clay serving ware on a wooden table"
              ratio="3 / 4"
              class="rounded-xl"
            />
          </div>
        </div>
        <div>
          <p class="eyebrow eyebrow--left mb-3">Our story</p>
          <h2 id="story-title" class="display-2">
            A kitchen that feels like the 90s.
          </h2>
          <p class="mt-5">
            Remember Sunday meals that took all morning, steel tumblers of
            filter coffee, and a table that always had room for one more? That
            is the feeling we cook for. Our menu is built around South Indian
            comfort food, made fresh and served warm.
          </p>
          <div class="mt-7">
            <NuxtLink to="/about" class="btn btn-outline"
              >More about us</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Quote CTA -->
    <section
      class="band-forest on-dark scallop-bottom"
      aria-labelledby="cta-title"
      style="--scallop-color: var(--color-sand-100)"
    >
      <div class="container-x section text-center">
        <p class="eyebrow mb-3">Planning a gathering?</p>
        <h2 id="cta-title" class="display-2 mx-auto max-w-2xl">
          Let us cook for your next celebration.
        </h2>
        <p class="lead mx-auto mt-4 max-w-xl">
          Tell us the occasion, the date and the number of guests, and we will
          come back to you with a quote.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <NuxtLink :to="quoteLink.to" class="btn btn-light">{{
            quoteLink.label
          }}</NuxtLink>
          <a :href="site.phoneHref" class="btn btn-ghost-light"
            >Call {{ site.phoneDisplay }}</a
          >
        </div>
      </div>
    </section>

    <!-- Visit -->
    <section
      class="section"
      style="background: var(--color-sand-100)"
      aria-labelledby="visit-title"
    >
      <div class="container-x grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p class="eyebrow eyebrow--left mb-3">Find us</p>
          <h2 id="visit-title" class="display-2">Visit 90's South Kitchen</h2>
          <address class="mt-5 text-lg not-italic">
            <a
              :href="site.diningDistrictUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dining District<span class="sr-only-text">
                (opens in a new tab)</span
              >
            </a>
            <span v-for="line in site.addressLines" :key="line" class="block">{{
              line
            }}</span>
          </address>
          <p class="mt-4">
            Phone:
            <a :href="site.phoneHref" class="text-link">{{
              site.phoneDisplay
            }}</a>
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              :href="site.mapsLink"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions<span class="sr-only-text">
                (opens in a new tab)</span
              >
            </a>
            <a
              :href="site.diningDistrictUrl"
              class="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Dining District<span class="sr-only-text">
                (opens in a new tab)</span
              >
            </a>
          </div>
        </div>
        <div class="card">
          <h3>Find us inside Dining District</h3>
          <p class="mt-2">
            We are part of the Dining District food destination in the
            Patancheru Industrial Area of Hyderabad. Come hungry and bring
            friends, colleagues and family.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
