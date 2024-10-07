import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat']

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () =>{
    setDocSlots([])

    //getting current date
    let today = new Date()

    for(let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0) 

      //setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime){
        let formattedTime =  currentDate.toLocaleTimeString([], {hour : '2-digit', minute: '2-digit'})

        //add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        //increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div className='container mx-auto p-6'>
      {/* Doctor details grid container */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg'>
        
        {/* Doctor image on the left */}
        <div className='col-span-1'>
          <img className='w-full h-auto rounded-lg bg-primary border' src={docInfo?.image} alt={docInfo?.name} />
        </div>
        
        {/* Doctor details on the right */}
        <div className='col-span-2 flex flex-col gap-4'>
          {/* Doctor name and verified icon */}
          <div className='flex items-center gap-2'>
            <p className='text-2xl font-bold text-gray-800'>{docInfo.name}</p>
            <img className='w-5 h-5' src={assets.verified_icon} alt="Verified" />
          </div>
          
          {/* Degree and specialty */}
          <div className='text-lg'>
            <p className='text-gray-600'>{docInfo.degree} - {docInfo.speciality}</p>
          </div>
          
          {/* Experience button */}
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
              {docInfo.experience} years of experience
            </button>
          </div>
          
          {/* About the doctor */}
          <div>
            <p className='font-semibold text-lg flex items-center gap-1'>
              About
              <img className='w-4 h-4' src={assets.info_icon} alt="Info" />
            </p>
            <p className='text-gray-700'>{docInfo.about}</p>
          </div>

          {/* Appointment fee */}
          <div className='text-lg'>
            <p>Appointment Fee: <span className='font-semibold'>{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>
      </div>


      {/*------------Booking Slots-------------- */}
      <div className=' sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className=' flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index)=>(
              <div onClick={()=> setSlotIndex(index)}
               className={` text-center py-6 min-w-16 rounded-full cursor-pointer
               ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className=' flex items-center w-full gap-3 overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)}
               className={` text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer
              ${item.time === slotTime ? 'bg-primary text-white': ' text-gray-400 border border-gray-300'}`}
               key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button className=' bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>
        Book an Appointment</button>

      </div>

      {/*Listing related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

    </div>
  )
}

export default Appointment
