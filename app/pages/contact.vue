<script setup lang="ts">
import {
  contactSubjects,
  validateContact,
  type ContactPayload,
} from '#shared/validation'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact Us',
  description:
    "Get in touch with 90's South Kitchen at Dining District, Patancheru, Hyderabad. Call 086394 08555 or send us a message.",
})

const form = reactive<ContactPayload>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '',
})

const { errors, status, submit, reset } = useFormSubmit<ContactPayload>(
  '/api/contact',
  validateContact,
  'contact',
)

const describedBy = (key: keyof ContactPayload, hint = false) =>
  errors.value[key] ? `contact-${key}-error` : hint ? `contact-${key}-hint` : undefined

async function onSubmit() {
  const ok = await submit({ ...form })
  if (ok) Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '', website: '' })
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact us"
      title="We would love to hear from you."
      intro="Call us, send a message or come and find us at Dining District in Patancheru."
    />

    <section class="section" aria-labelledby="contact-form-title">
      <div class="container-x grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <!-- Details -->
        <div>
          <h2 class="display-2" id="contact-details-title">Get in touch</h2>
          <ul class="info-list mt-7" aria-labelledby="contact-details-title">
            <li>
              <span class="highlight__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.200 7-11.500A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" /><circle cx="12" cy="9.500" r="2.500" /></svg>
              </span>
              <div>
                <h3>Address</h3>
                <address>
                  <span v-for="line in site.addressLines" :key="line" class="block">{{ line }}</span>
                </address>
                <a :href="site.mapsLink" class="text-link" target="_blank" rel="noopener noreferrer">
                  Get directions<span class="sr-only-text"> (opens in a new tab)</span>
                </a>
              </div>
            </li>
            <li>
              <span class="highlight__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
              </span>
              <div>
                <h3>Phone</h3>
                <p><a :href="site.phoneHref" class="text-link">{{ site.phoneDisplay }}</a></p>
                <p class="text-sm">Call to reserve a table or check today's menu.</p>
              </div>
            </li>
            <li>
              <span class="highlight__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.500 3 14.500 0 18M12 3c-3 3.500-3 14.500 0 18" /></svg>
              </span>
              <div>
                <h3>Dining District</h3>
                <p>
                  <a :href="site.diningDistrictUrl" class="text-link" target="_blank" rel="noopener noreferrer">
                    diningdistrict.in<span class="sr-only-text"> (opens in a new tab)</span>
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Form -->
        <div class="card">
          <h2 id="contact-form-title" class="display-2" style="font-size: 1.75rem">Send us a message</h2>

          <div v-if="status === 'success'" class="notice notice--success mt-6" role="status">
            <p><strong>Thank you!</strong> Your message has been sent. We will get back to you soon.</p>
            <button type="button" class="btn btn-outline mt-4" @click="reset">Send another message</button>
          </div>

          <form v-else class="mt-6" novalidate @submit.prevent="onSubmit">
            <div class="form-grid form-grid--2">
              <FormField id="contact-name" label="Full name" required :error="errors.name">
                <input
                  id="contact-name"
                  v-model="form.name"
                  class="input"
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  :aria-invalid="!!errors.name"
                  :aria-describedby="describedBy('name')"
                />
              </FormField>

              <FormField id="contact-email" label="Email address" required :error="errors.email">
                <input
                  id="contact-email"
                  v-model="form.email"
                  class="input"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  :aria-invalid="!!errors.email"
                  :aria-describedby="describedBy('email')"
                />
              </FormField>

              <FormField id="contact-phone" label="Phone number" :error="errors.phone" hint="Optional">
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  class="input"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  inputmode="tel"
                  :aria-invalid="!!errors.phone"
                  :aria-describedby="describedBy('phone', true)"
                />
              </FormField>

              <FormField id="contact-subject" label="Subject" required :error="errors.subject">
                <select
                  id="contact-subject"
                  v-model="form.subject"
                  class="input"
                  name="subject"
                  required
                  :aria-invalid="!!errors.subject"
                  :aria-describedby="describedBy('subject')"
                >
                  <option value="" disabled>Choose a subject</option>
                  <option v-for="s in contactSubjects" :key="s" :value="s">{{ s }}</option>
                </select>
              </FormField>

              <div class="span-2">
                <FormField id="contact-message" label="Your message" required :error="errors.message">
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    class="input"
                    name="message"
                    rows="6"
                    required
                    :aria-invalid="!!errors.message"
                    :aria-describedby="describedBy('message')"
                  ></textarea>
                </FormField>
              </div>

              <!-- Honeypot: hidden from people, tempting for bots -->
              <div class="honeypot" aria-hidden="true">
                <label for="contact-website">Leave this field empty</label>
                <input id="contact-website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" />
              </div>
            </div>

            <div v-if="status === 'error'" class="notice notice--error mt-5" role="alert">
              Sorry, we could not send your message just now. Please try again, or call us on
              <a :href="site.phoneHref" class="text-link">{{ site.phoneDisplay }}</a>.
            </div>

            <button type="submit" class="btn btn-primary mt-6" :disabled="status === 'submitting'">
              {{ status === 'submitting' ? 'Sending...' : 'Send message' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="section band-sand" aria-labelledby="map-title" style="padding-block: 3.5rem">
      <div class="container-x">
        <h2 id="map-title" class="display-2 mb-6 text-center">Find us on the map</h2>
        <div class="map-frame">
          <iframe
            title="Map showing the location of 90's South Kitchen at Dining District, Patancheru"
            :src="site.mapsEmbed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>
