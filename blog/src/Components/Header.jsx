import React from 'react'
import poor from './../assets/img/poor.avif'

function Header() {
  return (
    // main div open
    <div>

      {/* nav */}
      <div className='flex justify-between items-center bg-black'>        
          <h1>Donation Platform</h1>
        <ul className='flex gap-4'>
          <li>NGOs</li>
          <li>Doners</li>
          <li>Admin</li>
          <li>Campagins</li>
        </ul>
      </div>

        {/* image */}
        <div className="bg-cover h-full w-full">
          <img src={poor} className='bg-cover' />
        </div>
      {/* donate now button */}
      <div className="h-full flex items-center justify-center">
        <button className="bg-red-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-800">
            Donate Now
        </button>
      </div>


        
        
      

    
    {/* main div close */}
    </div> 
  )
}

export default Header