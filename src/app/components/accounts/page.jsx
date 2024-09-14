import React from 'react'
import Image from 'next/image'
import Me from '../img/me.png'

export default function Spam() {
  return (
    <div>
      <h1>Spam</h1>
      <Image src={Me} alt="me" width={500} height={300} />
    </div>
  )
}