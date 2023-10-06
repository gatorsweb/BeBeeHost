import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'

export default function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);


  const toggleHandler = (section) => {
    switch (section) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      case 6:
        setIsOpen6(!isOpen6);
        break;
      case 7:
        setIsOpen7(!isOpen7);
        break;
      case 8:
        setIsOpen8(!isOpen8);
        break;
      case 9:
        setIsOpen9(!isOpen9);
        break;
      case 10:
        setIsOpen10(!isOpen10);
        break;
      
      default:
        break;
    }
  };

  return (
    <div className='bg-[#f9fafb] py-36'>
      <div className="container">
        <div className='grid grid-cols-3 md:grid-flow-row gap-8'>
            <div className='col-span-3 md:col-span-1'>
            <h1>
                Frequently Asked Questions
            </h1>
                <img src="/images/faq.svg" alt="" />
            </div>
            <div  className='col-span-3 md:col-span-2'>
           
            <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(1)}>
          <h4>What is BeBeeHost's Shared Hosting service?</h4>
          {isOpen1? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 text-paragraph ${isOpen1 ? 'block duration-500' : 'hidden'}`}>
          <p>
          BeBeeHost's Shared Hosting is a web hosting service where multiple websites share server resources on the same server. It's an affordable and beginner-friendly option for hosting personal websites, blogs, or small business websites.
          </p>
        </div>
      </div>
      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(2)}>
          <h4>What are the advantages of Shared Hosting?</h4>
          {isOpen2? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen2 ? 'block transition-transform duration-500' : 'hidden'}`}>
          <p>Shared Hosting is cost-effective and easy to set up, making it a great choice for those who are just starting with their online presence. It includes features like one-click installations for popular CMS platforms and email hosting.</p>
        </div>
      </div>
      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(3)}>
          <h4>How much disk space and bandwidth do I get with your Shared Hosting plans?</h4>
          {isOpen3? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen3 ? 'block duration-500' : 'hidden'}`}>
          <p>Our Shared Hosting plans come with various disk space and bandwidth allocations to suit different needs. You can choose the plan that matches your website's requirements, and you can upgrade as your website grows.</p>
        </div>
      </div>
      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(4)}>
          <h4>Can I host multiple websites on a single Shared Hosting plan?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen4 ? 'block duration-500' : 'hidden'}`}>
          <p>Yes, many of our Shared Hosting plans allow you to host multiple websites under the same account. This is a convenient option if you have multiple small websites or projects.</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(5)}>
          <h4>What level of customer support do you offer for Shared Hosting users?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen5 ? 'block duration-500' : 'hidden'}`}>
          <p>We provide 24/7 customer support for all our Shared Hosting customers. You can reach us through live chat, email, or phone for assistance with any hosting-related issues.</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(6)}>
          <h4>Is there a website builder included with your Shared Hosting plans?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen6 ? 'block duration-500' : 'hidden'}`}>
          <p>Yes, we offer a website builder tool or integration with popular website builders to help you create your website easily, even if you have no coding experience.</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(7)}>
          <h4>Is there a website builder included with your Shared Hosting plans?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen7 ? 'block duration-500' : 'hidden'}`}>
          <p>How do I manage my website and hosting account with BeBeeHost?</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(8)}>
          <h4>Is there a money-back guarantee for Shared Hosting plans?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen8 ? 'block duration-500' : 'hidden'}`}>
          <p>Yes, we offer a 30-day money-back guarantee on our Shared Hosting plans. If you're not satisfied with our services within the first 30 days, you can request a full refund.</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(9)}>
          <h4> Can I upgrade my Shared Hosting plan if my website traffic increases?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen9 ? 'block duration-500' : 'hidden'}`}>
          <p>Absolutely! We offer the flexibility to upgrade your Shared Hosting plan as your website's traffic and resource needs grow. This ensures that your website can handle increased visitors without any issues.</p>
        </div>
      </div>

      <div className="toggle-tab">
        <div className="toggle-heading" onClick={() => toggleHandler(10)}>
          <h4> How do I get started with BeBeeHost's Shared Hosting?</h4>
          {isOpen4? <AiOutlineMinus/> : <BsPlusLg/>}
        </div>
        <div className={`p-5 ${isOpen10 ? 'block duration-500' : 'hidden'}`}>
          <p>To get started, simply visit our website, select a Shared Hosting plan that suits your needs, and follow the signup process. If you have any questions or need assistance, our support team is here to help.</p>
        </div>
      </div>


            </div>
        </div>
      
    </div>
    </div>
    
  );
}
