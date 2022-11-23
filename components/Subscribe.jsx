import { useState, useRef } from 'react'
import Link from 'next/link'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
// import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage'
import ErrorMessage from 'components/ErrorMessage'
import LoadingSpinner from 'components/LoadingSpinner'

export default function Subscribe() {
  const [form, setForm] = useState(0)
  const inputEl = useRef(null)
  const { data } = useSWR('/api/subscribers', fetcher)
  const subscriberCount = new Number(data?.count)

  const subscribe = async (e) => {
    e.preventDefault()
    setForm(1)

    const email = inputEl.current.value
    const res = await fetch(`/api/subscribe?email=${email}`, {
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: 3,
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: 2,
      message: `Hooray! You're now on the list.`,
    })
  }

  return (
    <div className="bg-[#eee]">
      <div className="mb-1 dark:border-gray-800  max-w-7xl mx-auto px-4 drop-shadow-lg ">
        <div className="px-4  rounded py-4 text-center">
          <p className="text-3xl md:text-xl font-bold text-lawgrid_blue ">
            Subscribe to the newsletter
          </p>
          <p className="my-1">
            Get emails from us about latest law trends, News and Promotions.
          </p>
          <form className="relative my-4" onSubmit={subscribe}>
            <input
              ref={inputEl}
              aria-label="Email for newsletter"
              placeholder="tim@apple.com"
              type="email"
              autoComplete="email"
              required
              className="px-4 py-2 mt-1  block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
            />
            <button
              className="flex items-center justify-center absolute right-1 top-1 px-4 font-medium h-8 bg-lawgrid_blue  text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form.state === 1 ? <LoadingSpinner /> : 'Subscribe'}
            </button>
          </form>
          {form.state === 3 ? (
            <ErrorMessage>{form.message}</ErrorMessage>
          ) : (
            form.state === 2 && <SuccessMessage>{form.message}</SuccessMessage>
          )}
        </div>
      </div>
    </div>
  )
}
