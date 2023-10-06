import React from 'react'

export default function Why() {
  return (
    <div className='section-margin'>
        <div className='container'>
            <div className='section-heading'>
                <h1>What Makes BeBeeHost So Different</h1>
                <p className='sub-heading'>At BeBeeHost, we prioritize the security of your website. We've implemented CloudLinux, an advanced operating system, to fortify our shared hosting environment.</p>
            </div>
            
            <div className='grid grid-cols-3 gap-10 md:grid-flow-row'>
                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/shield.svg" alt="cyber-security" className='max-h-[50px]' />
                        </div>
                        <div>
                        <h3>Security with CloudLinux</h3>
                        <p>At BeBeeHost, your website's security is paramount. We employ state-of-the-art CloudLinux technology to fortify our shared hosting environment. With CloudLinux, your website enjoys an extra layer of protection, ensuring that any issues on neighboring sites won't impact yours. Your data's safety is our top concern.</p>
                        </div>
                        
                    </div>

                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/dashboard.svg" alt="cyber-security"  className='max-h-[50px]'/>
                        </div>
                        <div>
                        <h3>Optimized for Speed</h3>
                        <p>We understand that a speedy website is essential. Our shared hosting services are finely tuned for performance. Your site benefits from high-performance servers, lightning-quick solid-state drives (SSDs), and advanced caching techniques. Deliver an exceptional user experience with swift page loading times.</p>
                        </div>
                        
                    </div>


                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/ssl.svg" alt="cyber-security" className='max-h-[50px]' />
                        </div>
                        <div>
                        <h3>Free SSL Certificates</h3>
                        <p>Security and trust are fundamental online. That's why we include free SSL certificates with our shared hosting packages. Your website is encrypted, safeguarding sensitive data. Moreover, the "HTTPS" padlock symbol in the browser address bar enhances trustworthiness and improves search engine rankings.</p>
                        </div>
                        
                    </div>

                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/feature.svg" alt="cyber-security" className='max-h-[50px]' />
                        </div>
                        <div>
                        <h3>Install 400+ Applications</h3>
                        <p>We make website management a breeze with our one-click application installer. Choose from over 400 applications, including popular content management systems like WordPress, Joomla, and Drupal, as well as versatile e-commerce platforms and forums. Installing and maintaining your website has never been more convenient.</p>
                        </div>
                        
                    </div>

                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/money-back.svg" alt="cyber-security" className='max-h-[50px]' />
                        </div>
                        <div>
                        <h3>30-Day Refund Policy</h3>
                        <p>Your satisfaction is our priority. We offer a 30-day money-back guarantee on our shared hosting plans. If you're not completely satisfied during the first month, simply request a full refund—no questions asked. We're confident in the quality of our services and stand by our commitment to your satisfaction.</p>
                        </div>
                        
                    </div>

                    <div className='why-box col-span-3 md:col-span-1'>
                        <div className='why-img mr-4'>
                            <img src="/images/customer-support.svg" alt="cyber-security" className='max-h-[50px]' />
                        </div>
                        <div>
                        <h3>24/7 Support</h3>
                        <p>Need assistance, day or night? Our dedicated support team is available 24/7. Whether you have questions or encounter hosting-related issues, our experts are ready to assist you. Reach out via live chat, email, or phone, and experience reliable, round-the-clock support.</p>
                        </div>
                        
                    </div>

                </div>
        </div>
    </div>
  )
}
