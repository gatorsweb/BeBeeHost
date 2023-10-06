import React from 'react'

export default function DomainPageTitle() {
  return (
    <div className='bg-gradient-to-r from-[#facc15] to-[#f97316] py-16'>
        <div className='text-center'>
            <h1>Get a Domain Name</h1>
            <h3 className='text-[30px]'>Your great idea starts with a domain name.</h3>
            <form action='' className='domain-form mt-4'>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit" className='domain-btn'>Search</button>
            </form>
            <p>.club
.io
.online
.wiki
.xyz
.com
</p>
        </div>
    </div>
  )
}
