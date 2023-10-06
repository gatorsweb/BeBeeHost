import React from 'react'
import Header from '../../components/header/Header'
import Hero from './homeComponents/Hero'
import PricingHome from './homeComponents/PricingHome'
import Succeed from './homeComponents/Succeed'
import Why from './homeComponents/Why'
import Faq from './homeComponents/Faq'
import Help from './homeComponents/Help'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <PricingHome/>
        <Succeed/>
        <Why/>
        <Faq/>
        <Help/>
    </div>
  )
}
