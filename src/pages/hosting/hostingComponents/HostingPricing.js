import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

export default function HostingPricing() {
  return (
    <div className='container section-margin'>
        <div className='section-heading'>
            <h1>Hosting plans for every website</h1>
            <p className='sub-heading'>From budget-friendly shared hosting to powerful virtual private servers, there's a solution for your website</p>
        </div>
        <div className='grid grid-cols-3 md:grid-flow-row gap-8 max-w-[1060px] m-auto'>


            <div className='price-box col-span-3 md:col-span-1'>
                <div className='p-5 text-center'>
                    <h1>Starter </h1>
                    <p>Ideal for beginner/personal websites</p>
                </div>
                <div className='bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center text-[white]'>
                    <h1>$0.99/mo</h1>
                </div>
                <div className='p-5 pricelist'>
                    <ul className='text-[#5E636E] text-[18px]'>
                        <li> <span className='pricelist-icon'> <BsPatchCheckFill/> </span> 1 Website</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>~10,000 Visits Monthly</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>1 GB RAM</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>Unlimited NVMe StorageNEW</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE cPanel</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE & Auto SSL Certificate</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE Website Migrations</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE LiteSpeed</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>30-Day Money-Back</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <button className='order-btn'>Order Now</button>
                </div>
            </div>

            
            <div className='price-box bg-gradient-to-t from-[#f97316] to-[#facc15] col-span-3 md:col-span-1 border-2 border-[#facc15] popular'>
              
                <div className='p-5 text-center'>
                    <h1>Business </h1>
                    <p className='text-[black]'>Ideal for beginner/personal websites</p>
                </div>
                <div className='bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center text-[white]'>
                    <h1>$0.99/mo</h1>
                </div>
                <div className='p-5 pricelist'>
                    <ul className='text-[#fff] text-[18px] font-[500]'>
                        <li> <span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span> 1 Website</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>~10,000 Visits Monthly</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>1 GB RAM</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>Unlimited NVMe StorageNEW</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>FREE cPanel</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>FREE & Auto SSL Certificate</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>FREE Website Migrations</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>FREE LiteSpeed</li>
                        <li><span className='pricelist-icon text-[#fff23e]'> <BsPatchCheckFill/> </span>30-Day Money-Back</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <button className='order-btn shadow-lg shadow-primary border border-[#facc15]'>Order Now</button>
                </div>
            </div>


            <div className='price-box col-span-3 md:col-span-1'>
                <div className='p-5 text-center'>
                    <h1>Pro </h1>
                    <p>Ideal for beginner/personal websites</p>
                </div>
                <div className='bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-center text-[white]'>
                    <h1>$0.99/mo</h1>
                </div>
                <div className='p-5 pricelist'>
                    <ul className='text-[#5E636E] text-[18px]'>
                        <li> <span className='pricelist-icon'> <BsPatchCheckFill/> </span> 1 Website</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>~10,000 Visits Monthly</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>1 GB RAM</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>Unlimited NVMe StorageNEW</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE cPanel</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE & Auto SSL Certificate</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE Website Migrations</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>FREE LiteSpeed</li>
                        <li><span className='pricelist-icon'> <BsPatchCheckFill/> </span>30-Day Money-Back</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <button className='order-btn'>Order Now</button>
                </div>
            </div>






        </div>
    </div>
  )
}
