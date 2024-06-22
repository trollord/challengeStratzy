import React from 'react'

export default function Pricing() {
  return (
    <div className="card mx-20 pb-8">
        <div className="flex items-center justify-between">
        <div>
          {/* <div className="text-gray-400">Starts At</div> */}
          <div className="flex items-baseline">
          <img src='pricing.svg' alt='pricing' />
            {/* <span className="text-white text-3xl font-bold">₹</span>
            <span className="text-white text-4xl font-dm-sanz font-bold">1199</span>
            <span className="text-gray-400 text-lg font-dm-sanz ml-1">/month</span> */}
          </div>
        </div>
        <button className="bg-gold-premium-new text-gray-900 font-semibold py-2 px-8 mx-2 rounded-xl hover:bg-yellow-600 transition duration-300">
          Explore Edge+
        </button>
        </div>
    </div>
  )
};

