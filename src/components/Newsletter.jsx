"use client"
import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!email) {
      setError('Please enter your email')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waiting list')
      }

      setIsSuccess(true)
      setEmail('')
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <section className="py-16 bg-[#0B1F30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Join our waiting list
          </h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Be the first to know when we launch in your area!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-[#0B1F30] border border-[#FD671E]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#FD671E] placeholder-[#a1a9b0]"
                disabled={isLoading}
              />
              <button 
                type="submit"
                className="bg-[#FD671E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#e65a12] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </div>
                ) : (
                  'Join Now'
                )}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-sm mt-2 max-w-lg mx-auto w-full text-left sm:text-center">
                {error}
              </p>
            )}

            {isSuccess && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg max-w-lg mx-auto">
                Success! You've joined our waiting list. We'll be in touch soon.
              </div>
            )}

            <p className="text-sm mt-4 text-[#FD671E]/80">
              Get safety tips and exclusive offers. No spam, ever.
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Newsletter