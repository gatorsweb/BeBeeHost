import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


export default function DomainPageTitle() {
  return (
    <div className='bg-gradient-to-r from-[#facc15] to-[#f97316] py-24'>
        <div className='text-center'>
            <h1>Get a Domain Name</h1>
            <h3 className='text-[30px]'>Your great idea starts with a domain name.</h3>
            <form action='' className='domain-form mt-4'>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit" className='domain-btn'>Search</button>
            </form>
            <div className='extenton-name'>
              <p>.COM</p>
              <p>.NET</p>
              <p>.ORG</p>
              <p>.STORE</p>
              <p>.BLOG</p>
              <p>.INFO</p>
              <p>.ONLINE</p>
              <button className='underline underline-offset-4'>See all domain extentions <span className='ml-2'> <BsArrowRight/> </span></button>
            </div>
        </div>
    </div>
  )
}
