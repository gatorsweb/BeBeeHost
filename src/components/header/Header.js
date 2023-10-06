import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header bg-[white] drop-shadow-xl'>
            <div className='header-top h-[37px] border-b border-[#D9D9D9]'>
              <div className='container  flex items-center justify-between'>
              <ul>
                     <li> <span className='mr-2'> <img src="/images/email.svg" alt="logo" /> </span> <Link to={"/"}>sales@bebeeshost.com</Link> </li>
                     <li> <span className='mr-2'> <img src="/images/call.svg" alt="logo" /> </span> <Link to={"/"}>+91 8276895715</Link> </li>
                </ul>
                <ul>
                     <li> <span className='mr-2'> <img src="/images/question.svg" alt="logo" /> </span> <Link to={"/"}>Knowledgebase</Link> </li>
                     <li> <span className='mr-2'> <img src="/images/user.svg" alt="logo" /> </span> <Link to={"/"}>Client Area</Link> </li>
                </ul>

              </div>
                
            </div>
            <div className='navbar h-[75px] flex items-center '>
              <div className='container flex items-center justify-between'>
              <div className='logo'>
                  <Link to={"/"}><img src="/images/logo.svg" alt="logo" /></Link>
                      
                  </div>
                  <div className='main__nav'>
                      <ul>
                        <li><Link to={"/hosting"}>Web Hosting</Link> </li>
                        <li><Link to={"/"}>Web Registration</Link> </li>
                        <li><Link to={"/"}>Website Security</Link> </li>
                        <li><Link to={"/"}>About Us</Link> </li>
                      </ul>
                  </div>
                  <div className='button__group space-x-3'>
                      <button component="Link" to={"/"} className='register__btn'>Register</button>
                      <button component="Link" to={"/"} className='login__btn'>Login</button>
                  </div>
              </div>
                  
            </div>
    </div>
  )
}
