import { normaliseContact, validateContact } from '#shared/validation'

export default defineEventHandler(async (event) => {
  const payload = normaliseContact(await readBody(event))

  // Honeypot: pretend success so bots learn nothing.
  if (payload.website) return { ok: true }

  const errors = validateContact(payload)
  if (Object.keys(errors).length > 0) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Please check the highlighted fields.',
      data: { errors },
    })
  }

  const { website: _website, ...clean } = payload
  await deliverSubmission(event, 'contact', clean)
  return { ok: true }
})
