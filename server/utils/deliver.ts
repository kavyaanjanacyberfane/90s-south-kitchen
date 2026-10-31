import type { H3Event } from 'h3'

/**
 * Hands a validated submission to whatever is configured.
 *
 * - NUXT_FORM_WEBHOOK_URL set  -> POST the JSON there (Zapier, Make, Formspree, Apps Script...).
 * - Not set                    -> log to the server console so nothing is silently lost in development.
 *
 * Throws if a configured webhook rejects the request, so the visitor sees an error
 * and the phone-number fallback instead of a false "thank you".
 */
export async function deliverSubmission(
  event: H3Event,
  kind: 'contact' | 'quote',
  payload: object,
): Promise<void> {
  const { formWebhookUrl } = useRuntimeConfig(event)
  const record = { kind, receivedAt: new Date().toISOString(), ...payload }

  if (!formWebhookUrl) {
    console.info(`[90sk:${kind}]`, JSON.stringify(record))
    return
  }

  try {
    await $fetch(formWebhookUrl, { method: 'POST', body: record })
  } catch (error) {
    console.error(`[90sk:${kind}] webhook delivery failed`, error)
    throw createError({
      statusCode: 502,
      statusMessage: 'We could not send your message right now.',
    })
  }
}
