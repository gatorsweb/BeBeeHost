import React from 'react'
import { PiGameController } from 'react-icons/pi'
import { FiLayers } from 'react-icons/fi'
import { BsSpeedometer } from 'react-icons/bs'

export default function Succeed() {
  return (
    <div className='bg-gradient-to-r from-[#6366f1] to-[#a855f7] section-margin py-36'>
        <div className='container'>

                <div className='section-heading'>
                    <h1 className='text-[white]'>BeBeeHost: Your Way to Succeed</h1>
                    <p className='sub-heading text-[white]'>Boost your website's growth with BeBeeHost as your strong base.</p>
                </div>
                <div className='grid grid-cols-3 gap-10 md:grid-flow-row'>
                        <div className='feature-box col-span-3 md:col-span-1'>
                            <div className='featurebox-icon-box'>
                            <PiGameController className='featurebox-icon text-primary' />
                            </div>
                            
                            <div>
                            <h3>User-Friendly cPanel</h3>
                            <p>Our simple cPanel (custom control panel) makes managing web hosting a piece of cake.</p>
                            </div>
                        </div>

                        <div className='feature-box col-span-3 md:col-span-1'>
                            <div className='featurebox-icon-box'>
                            <FiLayers className='featurebox-icon text-[#5856d6]' />
                            </div>
                            
                            <div>
                            <h3>All-in-One Solutions</h3>
                            <p>Apart from web hosting, our toolset covers everything you need for success.</p>
                            </div>
                        </div>

                        <div className='feature-box col-span-3 md:col-span-1'>
                            <div className='featurebox-icon-box'>
                            <BsSpeedometer className='featurebox-icon text-[#07bc0c]' />
                            </div>
                            
                            <div>
                            <h3>Fast & Reliable</h3>
                            <p> We're here for speed and reliability. A unreachable website means fewer search engine visibility. </p>
                            </div>
                        </div>
                </div>

        </div>
    </div>
  )
}
