import React from 'react'

export default function WhyDomain() {
  return (
    <div className='section-margin'>
        <div className='container'>
        <div className='text-center mb-10'>
        <h1>Why Having a Domain is Important for Your Website</h1>
        <p className='text-[22px]'>Discover the importance of having your own domain for a successful online journey.</p>
        </div>

        <div className='grid grid-cols-3 md:grid-flow-row gap-8'>
            <div className='why-domain-box'>
                <div className='domain-box-icon'> <img src="images/http.svg" alt="" /> </div>
                <h3>Unique Online Address</h3>
                <p>A domain is like your internet home address. It's where people go to find you on the web, just like they use your home address to find your house in the real world.</p>
            </div>
            <div className='why-domain-box'>
            <div className='domain-box-icon'> <img src="images/portfolio.svg" alt="" /> </div>
                <h3>Looking More Professional</h3>
                <p>Having your own domain (like www.yourbusinessname.com) makes your website seem more trustworthy and serious.</p>
            </div>
            <div className='why-domain-box'>
            <div className='domain-box-icon'> <img src="images/brand-image.svg" alt="" /> </div>
                <h3>Building Your Brand</h3>
                <p>A custom domain helps you make your brand stronger and more recognizable. It's a big part of making your brand look the same everywhere.</p>
            </div>
            <div className='why-domain-box'>
            <div className='domain-box-icon'> <img src="images/broadcast.svg" alt="" /> </div>
                <h3>Personalized Email</h3>
                <p>With your domain, you can make special email addresses (like yourname@yourdomain.com), which look more professional than generic ones.</p>
            </div>
            <div className='why-domain-box'>
            <div className='domain-box-icon'> <img src="images/seo.svg" alt="" /> </div>
                <h3>Getting Found on Google</h3>
                <p>Having your domain can make your website show up better on Google and other search engines. They like websites with custom domains.</p>
            </div>
            <div className='why-domain-box'>
            <div className='domain-box-icon'> <img src="images/newsletter.svg" alt="" /> </div>
                <h3>Helping Your Marketing</h3>
                <p>Easy-to-remember domain names are super helpful for advertising. They're easy for people to remember and tell others about.</p>
            </div>
        </div>
        </div>
        
        
    </div>
  )
}
