import React from 'react'
import { BsCheckSquareFill } from 'react-icons/bs'

export default function Migrate() {
  return (
    <div className='container section-margin'>
        <div className='grid grid-cols-2 md:grid-flow-row gap-6'>
            <div className='col-span-2 md:col-span-1'>
              <img src="images/migration.svg" alt="migrate" />
            </div>
            <div className='migration-list col-span-2 md:col-span-1'>
                <h1>Seamless Website Migrations with BeBeeHost</h1>
                <ul className='space-y-4 my-6'>
                    <li><span className='migration-icon'><BsCheckSquareFill/></span>Effortless Transition: BeBeeHost makes moving your website to our hosting platform a breeze.</li>
                    <li><span className='migration-icon'><BsCheckSquareFill/></span>No Downtime: Your website remains online throughout the entire migration process, ensuring uninterrupted service.</li>
                    <li><span className='migration-icon'><BsCheckSquareFill/></span>Expert Assistance: Our dedicated migration team ensures a smooth and problem-free transfer.</li>
                    <li><span className='migration-icon'><BsCheckSquareFill/></span>Data Safety: We handle your data with care, ensuring it remains secure during migration.</li>
                    
                    <li><span className='migration-icon'><BsCheckSquareFill/></span>Peace of Mind: With BeBeeHost, migrating your website is stress-free, so you can focus on your online goals.</li>
                </ul>
                <button className='migrate-btn'>Request for migrate</button>
            </div>
        </div>
    </div>
  )
}
