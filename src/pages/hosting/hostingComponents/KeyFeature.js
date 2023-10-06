import React from 'react'

export default function KeyFeature() {
  return (
    <div className='bg-[#facc15] section-margin py-28'>
        <div className='container'>
        <div className='text-center mb-6'>
            <h1>Key Features of Our Hosting Services</h1>
            <p className='text-[22px]'>Crafted to Elevate Your Website's Performance and Security</p>
        </div>
        <div className='grid grid-cols-3 md:grid-flow-row gap-6'>
            <div className='hosting-feature-box col-span-3 md:col-span-1'>
                <h3>One-click App Install</h3>
                <p>Easily enhance your website with 400+ one-click applications through Softaculous. Blogs, e-commerce, or content management, it's all effortless.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
                <h3>Premium Website Builder</h3>
                <p>Create your dream website without any coding skills using our premium website builder. Craft a professional online presence with ease.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
                <h3>99.9% Uptime</h3>
                <p>Trust in our hosting's exceptional uptime, ensuring your website is accessible to visitors around the clock. Your online presence stays reliable.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
                <h3>High-End Servers</h3>
                <p>Your website deserves the best. Our hosting is powered by high-end servers to deliver optimal performance, speed, and reliability.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
                <h3>Security & Firewall</h3>
                <p>Rest easy knowing your website is safeguarded with robust security measures and a firewall. Your data is protected from online threats.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
                <h3>Free Weekly Backup</h3>
                <p>We value your data's safety. That's why we offer free weekly backups, providing peace of mind in case of unexpected data loss.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
