import React from 'react'
import { useLocation } from 'react-router'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { confetti } from '../assets'

const Success = () => {
    const location = useLocation()
    const stripeData = location.state.stripeData
    console.log(location)
    return (
        <>

            <Navbar />
            <Announcement />
            <div className='w-screen h-screen relative flex justify-center items-center'>
                <img src={confetti} className='absolute z-[-10] w-screen h-screen' alt="confetti" />
                <div className=' z-[10] bg-[#FDB69F]/30 rounded-md p-[20px]'>
                    <h1 className='text-[4rem] font-extrabold text-center'>Thank you for Shopping!</h1>
                    <h1 className='text-2xl font-extrabold'>Your Comfirmation Number: {stripeData.id}</h1>
                    <div className={`bg-[url(${stripeData.receipt_url})]`} ></div>
                </div>
            </div>

            <Newsletter />
            <Footer />

        </>

    )
}

export default Success