import { useEffect, useState } from 'react'

interface UseAsyncOptions {
  onError?: (error: Error) => void
  onSuccess?: (data: any) => void
}

export const useAsync = (
  asyncFunction: () => Promise<any>,
  immediate = true,
  options?: UseAsyncOptions
) => {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = async () => {
    setStatus('pending')
    setValue(null)
    setError(null)
    try {
      const response = await asyncFunction()
      setValue(response)
      setStatus('success')
      options?.onSuccess?.(response)
      return response
    } catch (error) {
      setError(error as any)
      setStatus('error')
      options?.onError?.(error as Error)
      throw error
    }
  }

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [])

  return { execute, status, value, error }
}
