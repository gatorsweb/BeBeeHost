import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdMailOpen} from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { FiHelpCircle, FiUser } from 'react-icons/fi'
import { BiHomeCircle } from 'react-icons/bi'

export default function Header() {
  return (
    <div className='header bg-[white] drop-shadow-xl'>
            <div className='header-top h-[37px] border-b border-[#D9D9D9]'>
              <div className='container  flex items-center justify-between'>
              <ul>
                     <li> <span className='top-nav-icon'> <IoMdMailOpen/>  </span> <Link to={"/"}>sales@bebeeshost.com</Link> </li>
                     <li> <span className='top-nav-icon'> <LuPhoneCall/> </span> <Link to={"/"}>+91 8276895715</Link> </li>
                </ul>
                <ul>
                     <li> <span className='top-nav-icon'> <FiHelpCircle/> </span> <Link to={"/"}>Knowledgebase</Link> </li>
                     <li> <span className='top-nav-icon'> <FiUser/> </span> <Link to={"/"}>Client Area</Link> </li>
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
                        <li className='flex items-center text-[22px] cursor-pointer'>
                          <Link to={"/"}><BiHomeCircle/></Link>
                          
                        </li>
                        <li><Link to={"/hosting"}>Web Hosting</Link> </li>
                        <li><Link to={"/domain"}>Domain Registration</Link> </li>
                        <li><Link to={"/"}>Website Security</Link> </li>
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
