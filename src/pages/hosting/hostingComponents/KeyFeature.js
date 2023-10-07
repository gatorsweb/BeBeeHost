import React from 'react'

export default function KeyFeature() {
  return (
    <div className='bg-[#fffbeb] section-margin py-28'>
        <div className='container'>
        <div className='text-center mb-8'>
            <h1>Key Features of Our Hosting Services</h1>
            <p className='text-[22px] text-[black]'>Crafted to Elevate Your Website's Performance and Security</p>
        </div>
        <div className='grid grid-cols-3 md:grid-flow-row gap-6'>
            <div className='hosting-feature-box col-span-3 md:col-span-1'>
                <img src="images/app.svg" alt="app" className='Hosting-feature-img'  />
                <h3>One-click App Install</h3>
                <p>Upgrade your site with 400+ one-click apps via Softaculous. Blogs, online stores, or content management – all effortlessly.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
            <img src="images/web-design.svg" alt="web-design" className='Hosting-feature-img' />
                <h3>Premium Website Builder</h3>
                <p>Craft your dream website without coding using our premium builder. Create a pro online presence with ease.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
            <img src="images/page-speed.svg" alt="web-design" className='Hosting-feature-img' />
                <h3>99.9% Uptime</h3>
                <p>Rely on us for 24/7 website access. Your online presence stays rock-solid.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
            <img src="images/server.svg" alt="web-design" className='Hosting-feature-img' />
                <h3>High-End Servers</h3>
                <p>Your site deserves the best. We use high-end servers for ultimate performance, speed, and reliability.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
            <img src="images/server-security.svg" alt="web-design" className='Hosting-feature-img' />
                <h3>Security & Firewall</h3>
                <p>Rest easy with strong security and a firewall guarding your site. Shielding your data from online threats is our priority.</p>
            </div>
            <div className='hosting-feature-box  col-span-3 md:col-span-1'>
            <img src="images/data.svg" alt="web-design" className='Hosting-feature-img' />
                <h3>Free Weekly Backup</h3>
                <p>We prioritize your data's safety. That's why we offer free weekly backups for peace of mind in case of unexpected data loss.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
