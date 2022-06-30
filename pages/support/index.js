import React from 'react'

import Header from '../../components/Header/Header'
import SupportPage from '../../components/SupportPage/SupportPage'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

export default function Support() {
  return (
    <div style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 16, 16, 0.259042) 24.13%, rgba(76, 15, 248, 0.129521) 100%)', backgroundColor: '#121017'}}>
      <Header />
      <SupportPage />
      <Contacts gradient/>
      <Footer gradient/>
    </div>
  )
}