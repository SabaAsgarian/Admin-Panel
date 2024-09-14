import React from 'react'
import Image from 'next/image'
import Men from '../img/404.png'
import ResponsiveDrawer from '../ResponsiveDrawer'
export default function Spam() {
  return (
    <ResponsiveDrawer>
      
      <Image src={Men} alt="me" width={1000} height={585}
       
      
   
           placeholder="blur" // Optional blur-up while loading
      
      
      
      />
    </ResponsiveDrawer>
  )
}