import React from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

export default function PageTitle() {
  return (
    <div className='bg-gradient-to-r from-[#facc15] to-[#f97316] py-8'>
        <div className='container'>
          <div className='grid grid-cols-2 md:grid-flow-row gap-6'>
          <div className='col-span-2 md:col-span-1 flex flex-col justify-center'>
                <h1 className='font-[900]  text-[55px] leading-[65px]'>Your Website's Home in the Digital World</h1>
                <p className='text-[18px] my-4 text-[black]'>Welcome to our secure and high-performance web hosting solutions. Your website deserves a reliable place to call home, and we're here to make it happen. Explore our hosting services and get ready for an online experience that's fast, secure, and hassle-free.</p>
                <div>
                <button className='page-title-btn'>View Plans <span className='ml-2'><BsArrowDownCircle/></span>  </button>
                <p className='mt-2 text-[black] underline underline-offset-4 cursor-pointer'>30-day money-back guarantee</p>
                </div>
                
            </div>
            <div className='col-span-2 md:col-span-1'>
              <img src="images/laptop.svg" alt="laptop" />
            </div>

          </div>
            
        </div>
    </div>
  )
}
