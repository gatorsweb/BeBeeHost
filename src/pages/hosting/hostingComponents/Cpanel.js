import React from 'react'

export default function Cpanel() {
  return (
    <div className='container section-margin'>
        <div className='grid grid-cols-2 md:grid-flow-row gap-6'>
            <div className='flex flex-col justify-center col-span-2 md:col-span-1'>
                <img src="/images/cpanel_logo.png" alt="" className='max-w-[33%] mb-2' />
                <h1 className='leading-[55px] mb-4'>Streamlined Hosting Control</h1>
                <p>Experience hassle-free website management with cPanel, a user-friendly control panel offered by BeBeeHost. cPanel simplifies complex tasks, such as email configuration, file management, and application installations, making it easy for both beginners and experienced users. You'll also benefit from our 24/7 customer support, ensuring that help is always available whenever you need it. With cPanel, your website management becomes efficient and stress-free.</p>
            </div>
            <div className='col-span-2 md:col-span-1'>
                <img src="/images/cpanel.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}
