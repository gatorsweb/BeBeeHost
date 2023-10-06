import React from 'react'
import {BsChatLeftDotsFill, BsArrowRight } from 'react-icons/bs'
import { MdOutlineSupport } from 'react-icons/md'
import { MdMarkEmailRead } from 'react-icons/md'

export default function Help() {
  return (
    <div className='bg-gradient-to-r from-[#f97316] to-[#facc15] py-20'>

        <div className='container'>
            <div className='grid grid-cols-4 md:grid-flow-row gap-6'>
                <div className='col-span-4 md:col-span-1'>
                    <h1 className='text-[white] text-[35px]' >Need Some Help?</h1>
                    <p className='text-[white]'>Whether you're facing challenges or seeking advice on how to begin, don't hesitate to reach out to our knowledgeable experts. We're here to assist you!</p>
                </div>
                <div className='help-box space-y-4 col-span-4 md:col-span-1'>
                    <div className='help-box-icon '><BsChatLeftDotsFill /></div>
                    <h4>Sales Help</h4>
                    <p>24/7/365 Through the Chat Widget</p>
                    <button className='help-btn'>Chat Now <span className='ml-3'> <BsArrowRight/> </span> </button>
                </div>


                <div className='help-box space-y-4 col-span-4 md:col-span-1'>
                    <div className='help-box-icon '><MdOutlineSupport /></div>
                    <h4>Support Chat</h4>
                    <p>24/7/365 Through the Panel</p>
                    <button className='help-btn'>Chat Now <span className='ml-3'> <BsArrowRight/> </span> </button>
                </div>

                <div className='help-box space-y-4 col-span-4 md:col-span-1'>
                    <div className='help-box-icon'>
                        <MdMarkEmailRead/>
                        </div>
                    <h4>Support Email</h4>
                    <p>24/7/365 Through the Panel</p>
                    <button className='help-btn'>Chat Now <span className='ml-3'> <BsArrowRight/> </span> </button>
                </div>


            </div>
        </div>
    </div>
  )
}
