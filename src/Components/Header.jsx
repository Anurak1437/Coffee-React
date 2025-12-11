import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="bg-amber-800 text-white shadow-lg">
        <div className="w-full mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="logo" width={60}/>
                <span className="text-2xl font-bold">Anurak Coffee</span>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header