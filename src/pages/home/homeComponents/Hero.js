import React from 'react'
import { BsCheckSquareFill } from 'react-icons/bs'

export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-[#facc15] to-[#f97316] py-20'>
        <div className='container'>
        <div className='grid grid-cols-2 md:grid-flow-row'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
            <p className='text-[24px] font-[600] text-[#000000] bg-gradient-to-r from-[#ffffff] to-[#facc1500] drop-shadow-md px-4 py-2 w-fit rounded-full'>Leading Shared Hosting Provider</p>
                <h1 className='hero-heading'>Experience Excellence with BeBeeHost</h1>
                
                <div className='hero-list my-3'>
                    <ul className="list-none">
                        <li><span><BsCheckSquareFill/> </span> Affordable Web Hosting</li>
                        <li><span><BsCheckSquareFill/> </span> Secure & Reliable Services</li>
                        <li><span><BsCheckSquareFill/> </span> Lightning-Fast Performance</li>
                        <li><span><BsCheckSquareFill/> </span> 24/7 Expert Support</li>
                    </ul>
                </div>
                <div className='md:space-x-5  space-y-5'>
                    <button className='hero-button view-plans-btn'>View Webhosting Plans</button>
                    <button className='hero-button others-plans-btn'>Other Solutions</button>
                </div>
            </div> 

            <div className='flex justify-center col-span-2 md:col-span-1'>
            <img src="/images/hosting.svg" alt="thumbsup" />
        </div>
        </div>
        </div>
        
    </div>
  )
}
