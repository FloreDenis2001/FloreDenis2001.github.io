'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md card-hover">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Something went wrong!</h2>
        <p className="text-gray-300 mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-all duration-300 glow"
        >
          Try again
        </button>
      </div>
    </div>
  )
}