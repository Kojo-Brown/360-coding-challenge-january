import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-5 border-gray-300 border-b-2 border-offset-4'>
        <div className="">
            <img src={Logo} alt='logo' />
        </div>

        <ul className='flex gap-12 text-white'>
            <li className='hover:underline underline-offset-[40px] cursor-pointer'>Home</li>
            <li className='hover:underline underline-offset-[40px] cursor-pointer'>Landlord</li>
            <li className='hover:underline underline-offset-[40px] cursor-pointer'>Tenants</li>
            <li className='hover:underline underline-offset-[40px] cursor-pointer'>Contact Us</li>
        </ul>

        <div className="">

        </div>
    </nav>
  )
}

export default Navbar