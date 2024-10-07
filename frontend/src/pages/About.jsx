import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className=' text-purple-600 font-medium'>US</span></p>
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className=' w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500'>
          <p>Welcome to Prescripto. Your Trusted partner in managing your healthcare needs conveniently and efficiently.
            At Prescripto, We understand the challenges individuals face when it comes to Scheduling doctor
            appointments and providing personalized care.
          </p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our
            platform by offering the best solutions and services to our users. We believe that every patient deserves 
            access to the best healthcare experience.
          </p>

          <b className=' text-purple-500'>Our Mission</b>
          <p>Our mission is to create a seamless, user-friendly, and convenient platform that allows patients to book,
            schedule, and manage their healthcare appointments with the help of expert doctors. We are committed to
            providing a safe, secure, and convenient environment for our users to access their healthcare needs.
          </p>
          
        </div>
      </div>

      <div className=' text-xl my-4'>
        <p>WHY <span className=' text-black font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className=' flex flex-col md:flex-row mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy LifeStyle.</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access To A Network Of Trusted HealthCare Professionals In Your Area.</p>
        </div>

        <div className=' border px-10 md:px-16 py-8 sm:py-8 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
        </div>

      </div>

    </div>
  )
}

export default About