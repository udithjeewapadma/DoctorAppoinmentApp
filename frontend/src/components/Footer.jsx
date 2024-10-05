import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10'>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side*/ }
            <div>
                <img className=' mb-5 w-40' src={assets.logo} alt="" />
                <p className=' w-full md:w-2/8 text-gray-600 leading-5'>Your trusted platform for scheduling appointments with qualified healthcare professionals. 
                    We are committed to making healthcare more accessible by connecting you with the right doctors at the right time.
                     Book your appointment today and take a step toward better health!</p>
            </div>

            {/* center side*/ }
            <div>
                <p className=' text-lg font-medium mb-5'>COMPANY</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>


            {/* right side*/ }
            <div>
                <p className=' text-lg font-medium mb-5'>GET IN TOUCH</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                    <li>+94-702169017</li>
                    <li>udithjeewapadma117@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* copyrights text*/ }
        <div>
            <hr />
            <p className=' py-5 text-sm text-center'>Copyright 2024@ Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer