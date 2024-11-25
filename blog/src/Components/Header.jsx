import React from 'react'
import logo from './../assets/img/logo.jpeg'

function Header() {
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} className='w-[180px]'/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About us</li>
            <li className='hover:font-bold cursor-pointer'>Contact us</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white'>suscribe</button>
    </div>
  )
}

export default Header