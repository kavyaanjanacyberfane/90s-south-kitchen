import type { FieldErrors } from '#shared/validation'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ApiError {
  data?: { data?: { errors?: Record<string, string> } }
}

/**
 * Client-side validation + POST to a Nitro endpoint, with focus management
 * so keyboard and screen-reader users land on the first problem.
 */
export function useFormSubmit<T extends object>(
  endpoint: string,
  validate: (values: T) => FieldErrors<T>,
  fieldIdPrefix: string,
) {
  const errors = ref<FieldErrors<T>>({}) as Ref<FieldErrors<T>>
  const status = ref<Status>('idle')

  async function focusFirstError() {
    await nextTick()
    const first = Object.keys(errors.value)[0]
    if (first) document.getElementById(`${fieldIdPrefix}-${first}`)?.focus()
  }

  async function submit(values: T): Promise<boolean> {
    errors.value = validate(values)
    if (Object.keys(errors.value).length > 0) {
      status.value = 'idle'
      await focusFirstError()
      return false
    }

    status.value = 'submitting'
    try {
      await $fetch(endpoint, { method: 'POST', body: values })
      status.value = 'success'
      return true
    } catch (error) {
      const serverErrors = (error as ApiError).data?.data?.errors
      if (serverErrors) {
        errors.value = serverErrors as FieldErrors<T>
        status.value = 'idle'
        await focusFirstError()
      } else {
        status.value = 'error'
      }
      return false
    }
  }

  function reset() {
    errors.value = {}
    status.value = 'idle'
  }

  return { errors, status, submit, reset }
}
