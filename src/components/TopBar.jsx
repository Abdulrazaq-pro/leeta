import React from 'react'

const TopBar = () => {
  return (
    <div>
        <div className="bg-black text-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <span>Customers</span>
          <span>Vendors</span>
          <span>Riders</span>
        </div>
        <div className="flex space-x-4">
          <span>Company</span>
          <span>FAQs</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
