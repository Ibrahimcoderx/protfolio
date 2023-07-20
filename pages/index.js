import About from '@/Components/About'
import Banner from '@/Components/Banner'
import Experence from '@/Components/Experence'
import Footer from '@/Components/Footer'
import Menubar from '@/Components/Menubar'
import Protfolio from '@/Components/Protfolio'
import Review from '@/Components/Review'
import Services from '@/Components/Services'
import React from 'react'

const index = () => {

  return (

    <div className='Portfolio'>

        <Menubar/>
        <Banner/>
        <Review/>
        <Protfolio/>
        <Experence/>
        <About/>
        <Services/>
        <Footer/>


    </div>

  )

}

export default index