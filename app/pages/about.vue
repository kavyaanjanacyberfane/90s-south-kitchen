<script setup lang="ts">
import { quoteLink, site } from '~/data/site'

useSeoMeta({
  title: 'About Us',
  description:
    "Learn about 90's South Kitchen: a nostalgic South Indian restaurant serving vegetarian and non-vegetarian dishes at Dining District, Patancheru, Hyderabad.",
})

const values = [
  {
    title: 'Comfort first',
    text: 'Food that feels familiar and generous, from the first sip of filter coffee to the last spoon of curd rice.',
  },
  {
    title: 'Honest cooking',
    text: 'Fresh ingredients, patient cooking and spices balanced the way a home kitchen would balance them.',
  },
  {
    title: 'A table for everyone',
    text: 'A full vegetarian menu and a full non-vegetarian menu, so mixed groups can sit and share together.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="About us"
      title="Cooking the South, with a little nostalgia."
      intro="90's South Kitchen is a South Indian restaurant for people who miss unhurried meals, familiar flavours and a table full of family."
    />

    <section class="section" aria-labelledby="about-story">
      <div class="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p class="eyebrow eyebrow--left mb-3">The idea</p>
          <h2 id="about-story" class="display-2">Where the 90s meet your plate.</h2>
          <p class="mt-5">
            The 1990s were a time of slower meals: steel plates, banana leaves, a kitchen full of
            aromas and someone always saying "one more helping". Our name is a nod to that era,
            and our menu is a love letter to the South Indian food that came with it.
          </p>
          <p class="mt-4">
            The clay pot in our emblem says it best: warm food, cooked with care, shared
            generously. We bring that spirit to every dish, whether it is a simple breakfast
            or a long family lunch.
          </p>
        </div>
        <div class="arch mx-auto w-full max-w-md">
          <FoodImage src="/images/Heritage South Indian Feast.png" alt="Cosy, traditional dining space at 90's South Kitchen" ratio="4 / 5" />
        </div>
      </div>
    </section>

    <section class="section band-sand" aria-labelledby="values-title">
      <div class="container-x">
        <SectionHeading eyebrow="What we believe" title="Three things we keep close" />
        <h2 id="values-title" class="sr-only-text">Our values</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article v-for="value in values" :key="value.title" class="card">
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="kitchen-title">
      <div class="container-x">
        <SectionHeading
          eyebrow="Our kitchen"
          title="Vegetarian and non-vegetarian, side by side"
          intro="Whatever your table prefers, there is a South Indian favourite waiting for it."
        />
        <h2 id="kitchen-title" class="sr-only-text">What we serve</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article class="card">
            <h3 class="flex items-center gap-3">
              <span class="diet-mark" aria-hidden="true"></span> Vegetarian
            </h3>
            <p>
              Dosas, idlis, vadas, pongal and full vegetarian meals, with chutneys and sambar made
              fresh.
            </p>
          </article>
          <article class="card">
            <h3 class="flex items-center gap-3">
              <span class="diet-mark diet-mark--non" aria-hidden="true"></span> Non-Vegetarian
            </h3>
            <p>
              Spicy Andhra-style chicken, mutton and fish dishes, and flaky parottas with rich
              curries.
            </p>
          </article>
        </div>
        <div class="mt-8 flex justify-center">
          <NuxtLink to="/" class="btn btn-outline">See menu highlights</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section band-sand" aria-labelledby="about-location">
      <div class="container-x grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <p class="eyebrow eyebrow--left mb-3">Where to find us</p>
          <h2 id="about-location" class="display-2">At Dining District, Patancheru</h2>
          <p class="mt-5">
            You will find us at Dining District in the Patancheru Industrial Area of Hyderabad. See
            what else is on offer at Dining District on their website.
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a :href="site.diningDistrictUrl" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Visit Dining District<span class="sr-only-text"> (opens in a new tab)</span>
            </a>
            <a :href="site.mapsLink" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Get directions<span class="sr-only-text"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div class="card">
          <h3>Planning a celebration?</h3>
          <p class="mt-2">
            Tell us about your occasion and we will prepare a quote for your group.
          </p>
          <div class="mt-5">
            <NuxtLink :to="quoteLink.to" class="btn btn-primary">{{ quoteLink.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
