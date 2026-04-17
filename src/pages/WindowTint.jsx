import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceSection from '../Common/ServiceWorkflowSection'
import serviceHeaderData from '../Data/serviceData'
import { serviceWorkflowData } from "../Data/serviceWorkflowData"
import Gallery from '../Data/Gallery'
import GalleryCarousel from '../Common/GalleryCarousel'
const WindowTint = () => {
  return (
    <div>
      <ServiceHeader data={serviceHeaderData.windowTinting}/>
      <ServiceSection data={serviceWorkflowData.windowTinting}/>
      <GalleryCarousel data={Gallery.windowTinting} />
    </div>
  )
}

export default WindowTint;