'use client';
import React from 'react'
import Image from 'next/image'

interface AvataProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvataProps> = ({
  src
}) => {
  return (
    <Image 
      className= "rounded-full"
      height="30"
      width="30"
      alt='Avatar'
      src={src || '/images/placeholder.jpg'}
      />
  )
}

export default Avatar