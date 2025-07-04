import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8  lg:py-12  bg-gray-100 '>
        <div className='container max-w-[1100px] xl:max-w-[1200px]  2xl:max-w-[1400px] mx-auto px-4 lg:px-2 xl:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* ------ */}
        <div>
            <Link href={'/'} className='text-2xl font-bold text-[#4CAF50]'>
              𝓜𝓮𝓪𝓵𝓜𝓪𝓽𝓮
              </Link>
              <p className='text-foreground mt-1' >
            Your smart companion for finding recipes, planning meals, and making cooking easier than ever.
          </p>
        </div>
        {/* ------ */}
        <div>
          <h3 className="font-semibold text-primary mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline text-gray-500">Home</Link></li>
            <li><Link href="/menu" className="hover:underline text-gray-500">Menu</Link></li>
            <li><Link href="/planner" className="hover:underline text-gray-500">Meal Planner</Link></li>
            <li><Link href="/about" className="hover:underline text-gray-500">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact or Social */}
        <div>
          <h3 className="font-semibold text-primary mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li className='text-gray-800'>Email: support@mealmate.com</li>
            <li><Link href="#" className="hover:underline text-gray-500">Instagram</Link></li>
            <li><Link href="#" className="hover:underline text-gray-500">Facebook</Link></li>
            <li><Link href="#" className="hover:underline text-gray-500">Twitter</Link></li>
          </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer