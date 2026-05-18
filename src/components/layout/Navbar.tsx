import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between px-12 h-16">
  <div className="text-xl font-black text-brand">
    <span className="text-primary">Skills</span> Lab
  </div>
  <div className="flex items-center gap-8">
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About Us</a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Our Services</a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Consultants</a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Training</a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
  </div>
  <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-indigo-600 transition-colors">
    Book Now
  </button>
</nav>
    </div>
  )
}

export default Navbar