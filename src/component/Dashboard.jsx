import React from 'react'
import FrontPage from './page/frontPage'
import MyCarousel from './Carosuael/First'
import Back11 from './Background1/Back11'
import Back_4 from './Background_4/Back_4'
import ContractorWorkes from './ContractorWorkers/ContractorWorker'
import Back1 from './Background/Back1'
import HowItWork from './HowItWork/HowItWork'
import Back_3 from './Background_3/Back_3'
import CommercialDesign from './CommercialDesign'
import LatestHouse from './LatestHouse'
import Footer from './Footer'
import Showcasing from './Carosuael/Showcasing'
import HearFrom from './Carosuael/HearFrom'

function Dashboard() {
  return (
   <>
   <FrontPage/>
   <MyCarousel/>
   <Back1/>

   <LatestHouse/>
   <CommercialDesign/>
   <Back11/>
   <Back_4/>
   <ContractorWorkes/>
   <HowItWork/>
   <Back_3/>
   <Showcasing/>
   <HearFrom/>
   <Footer/>
   </>
  )
}

export default Dashboard