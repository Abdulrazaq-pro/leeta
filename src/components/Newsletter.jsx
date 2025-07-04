import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <section className="py-16 bg-[#0B1F30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Order your gas in minutes
          </h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Get ₦500 off your first order when you subscribe to our newsletter!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full text-[#a1a9b0] focus:outline-none ring-2 focus:ring-[#FD671E]"
            />
            <button className="bg-[#FD671E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#e65a12] transition-colors">
              Subscribe
            </button>
          </div>

          <p className="text-sm mt-4 text-[#FD671E]/80">
            Get safety tips and exclusive offers. No spam, ever.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Newsletter