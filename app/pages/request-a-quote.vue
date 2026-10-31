<script setup lang="ts">
import {
  cuisinePreferences,
  eventTypes,
  serviceTypes,
  validateQuote,
  type QuotePayload,
} from '#shared/validation'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Request a Quote',
  description:
    "Planning a party, family function or corporate event? Request a quote from 90's South Kitchen, Dining District, Patancheru, Hyderabad.",
})

const blank = (): QuotePayload => ({
  name: '',
  email: '',
  phone: '',
  organisation: '',
  eventType: '',
  eventDate: '',
  guests: '',
  service: '',
  cuisine: '',
  budget: '',
  message: '',
  website: '',
})

const form = reactive<QuotePayload>(blank())

const { errors, status, submit, reset } = useFormSubmit<QuotePayload>(
  '/api/quote',
  validateQuote,
  'quote',
)

// Visitor's local date (yyyy-mm-dd) for the date input's min attribute.
// Set after mount so the server (different time zone) and browser never disagree.
const today = ref('')
onMounted(() => {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  today.value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
})

const describedBy = (key: keyof QuotePayload, hint = false) =>
  errors.value[key] ? `quote-${key}-error` : hint ? `quote-${key}-hint` : undefined

async function onSubmit() {
  const ok = await submit({ ...form })
  if (ok) Object.assign(form, blank())
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Request a quote"
      title="Tell us about your occasion."
      intro="Share a few details and we will get back to you with a quote for your gathering."
    />

    <section class="section" aria-labelledby="quote-form-title">
      <div class="container-x grid items-start gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:gap-14">
        <div class="card">
          <h2 id="quote-form-title" class="display-2" style="font-size: 1.75rem">Your event details</h2>

          <div v-if="status === 'success'" class="notice notice--success mt-6" role="status">
            <p>
              <strong>Thank you!</strong> We have received your quote request and will contact you
              on the phone number you gave us.
            </p>
            <button type="button" class="btn btn-outline mt-4" @click="reset">Submit another request</button>
          </div>

          <form v-else class="mt-6" novalidate @submit.prevent="onSubmit">
            <div class="form-grid form-grid--2">
              <FormField id="quote-name" label="Full name" required :error="errors.name">
                <input id="quote-name" v-model="form.name" class="input" type="text" name="name" autocomplete="name" required :aria-invalid="!!errors.name" :aria-describedby="describedBy('name')" />
              </FormField>

              <FormField id="quote-organisation" label="Organisation" :error="errors.organisation" hint="Optional, for company events">
                <input id="quote-organisation" v-model="form.organisation" class="input" type="text" name="organisation" autocomplete="organization" :aria-describedby="describedBy('organisation', true)" />
              </FormField>

              <FormField id="quote-email" label="Email address" required :error="errors.email">
                <input id="quote-email" v-model="form.email" class="input" type="email" name="email" autocomplete="email" required :aria-invalid="!!errors.email" :aria-describedby="describedBy('email')" />
              </FormField>

              <FormField id="quote-phone" label="Phone number" required :error="errors.phone">
                <input id="quote-phone" v-model="form.phone" class="input" type="tel" name="phone" autocomplete="tel" inputmode="tel" required :aria-invalid="!!errors.phone" :aria-describedby="describedBy('phone')" />
              </FormField>

              <FormField id="quote-eventType" label="Type of occasion" required :error="errors.eventType">
                <select id="quote-eventType" v-model="form.eventType" class="input" name="eventType" required :aria-invalid="!!errors.eventType" :aria-describedby="describedBy('eventType')">
                  <option value="" disabled>Choose an occasion</option>
                  <option v-for="t in eventTypes" :key="t" :value="t">{{ t }}</option>
                </select>
              </FormField>

              <FormField id="quote-eventDate" label="Event date" required :error="errors.eventDate">
                <input id="quote-eventDate" v-model="form.eventDate" class="input" type="date" name="eventDate" :min="today" required :aria-invalid="!!errors.eventDate" :aria-describedby="describedBy('eventDate')" />
              </FormField>

              <FormField id="quote-guests" label="Number of guests" required :error="errors.guests" hint="An estimate is fine">
                <input id="quote-guests" v-model="form.guests" class="input" type="number" name="guests" min="1" max="5000" inputmode="numeric" required :aria-invalid="!!errors.guests" :aria-describedby="describedBy('guests', true)" />
              </FormField>

              <FormField id="quote-service" label="Service needed" required :error="errors.service">
                <select id="quote-service" v-model="form.service" class="input" name="service" required :aria-invalid="!!errors.service" :aria-describedby="describedBy('service')">
                  <option value="" disabled>Choose a service</option>
                  <option v-for="s in serviceTypes" :key="s" :value="s">{{ s }}</option>
                </select>
              </FormField>

              <FormField id="quote-cuisine" label="Menu preference" required :error="errors.cuisine">
                <select id="quote-cuisine" v-model="form.cuisine" class="input" name="cuisine" required :aria-invalid="!!errors.cuisine" :aria-describedby="describedBy('cuisine')">
                  <option value="" disabled>Choose a preference</option>
                  <option v-for="c in cuisinePreferences" :key="c" :value="c">{{ c }}</option>
                </select>
              </FormField>

              <FormField id="quote-budget" label="Budget" :error="errors.budget" hint="Optional, for example a per-head figure">
                <input id="quote-budget" v-model="form.budget" class="input" type="text" name="budget" :aria-describedby="describedBy('budget', true)" />
              </FormField>

              <div class="span-2">
                <FormField id="quote-message" label="Anything else we should know?" :error="errors.message" hint="Favourite dishes, dietary needs, timings, venue details...">
                  <textarea id="quote-message" v-model="form.message" class="input" name="message" rows="5" :aria-describedby="describedBy('message', true)"></textarea>
                </FormField>
              </div>

              <!-- Honeypot: hidden from people, tempting for bots -->
              <div class="honeypot" aria-hidden="true">
                <label for="quote-website">Leave this field empty</label>
                <input id="quote-website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
              </div>
            </div>

            <div v-if="status === 'error'" class="notice notice--error mt-5" role="alert">
              Sorry, we could not send your request just now. Please try again, or call us on
              <a :href="site.phoneHref" class="text-link">{{ site.phoneDisplay }}</a>.
            </div>

            <button type="submit" class="btn btn-primary mt-6" :disabled="status === 'submitting'">
              {{ status === 'submitting' ? 'Sending...' : 'Request my quote' }}
            </button>
          </form>
        </div>

        <aside class="grid gap-6" aria-label="About quotes">
          <div class="card">
            <h3>How it works</h3>
            <ol class="steps mt-4">
              <li>Send us your occasion, date and guest count.</li>
              <li>We review your request and call you to talk through the menu.</li>
              <li>You receive a quote and can confirm when you are ready.</li>
            </ol>
          </div>
          <div class="card">
            <h3>Prefer to talk?</h3>
            <p class="mt-1">
              Call us on <a :href="site.phoneHref" class="text-link">{{ site.phoneDisplay }}</a>.
            </p>
            <p class="mt-3 text-sm">
              {{ site.addressText }}
            </p>
            <p class="mt-3">
              <a :href="site.diningDistrictUrl" class="text-link" target="_blank" rel="noopener noreferrer">
                Dining District website<span class="sr-only-text"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
