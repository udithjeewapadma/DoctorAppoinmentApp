import React from 'react';
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className=' flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-10'>
        {/*left side */}
        <div className=' md:w-1/2 flex flex-col items-start justify-center gap-2 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className=' text-3xl md:text-3xl lg:text-4xl text-white font-semibold
             leading-tight md:leading-tight lg:leading-tight'> Book Appointments <br /> With Trusted Doctors</p>
            <div className=' flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className=' w-28' src={assets.group_profiles} alt="" />
                <p className=' text-gray-300'>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
            </div>
            <a className='flex items-center gap-2 text-gray-500 bg-white px-8 py-2 rounded-full text-sm m-auto
            md:m-0 hover:scale-105 transition-all duration-300' href="#specialty">
            Book Appointment
            <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
            </a>

        </div>

        {/*right side */}
        <div className=' md:w-1/2 relative'>
            <img className=' w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>

    </div>
  )
}

export default Header