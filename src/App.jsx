import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import Storepic from './Components/Storepic';

const App = () => {
  return (
    <>
    <Header />
    <Storepic/>
    <Banner />
    <Content/>
    <Footer />
    </>
  )
}

export default App