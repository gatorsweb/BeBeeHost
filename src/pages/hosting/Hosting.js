import React from 'react'
import Header from '../../components/header/Header'
import PageTitle from './hostingComponents/PageTitle'
import HostingPricing from './hostingComponents/HostingPricing'
import KeyFeature from './hostingComponents/KeyFeature'
import Cpanel from './hostingComponents/Cpanel'
import MoneyReturn from './hostingComponents/MoneyReturn'
import Migrate from './hostingComponents/Migrate'

export default function Hosting() {
  return (
    <div>
        <Header/>
        <PageTitle/>
        <HostingPricing/>
        <KeyFeature/>
        <Cpanel/>
        <MoneyReturn/>
        <Migrate/>
        
    </div>
  )
}
