import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src="/Banner P1.png" alt="Promo1" className="w-full h-100 object-cover rounded-lg" />
        <img src="/Banner P2.png" alt="Promo2" className="w-full h-100 object-cover rounded-lg" />
        <img src="/Banner P3.png" alt="Promo3" className="w-full h-100 object-cover rounded-lg" />
      </div>

    </>
  )
}

export default Banner