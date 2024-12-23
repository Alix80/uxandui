import React from 'react'
import Image from 'next/image'
import gucci from '@/app/components/image/Vector (2).png'
import versace from '@/app/components/image/Vector.png'
import ck from '@/app/components/image/Group (1).png'
import prada from '@/app/components/image/Group.png'
import zara from '@/app/components/image/zara-logo-1 1.png'

export const LogoSection = () => {
  return (
    <div className='w-[1440px] h-[122px] bg-black flex justify-evenly items-center m-auto '>
        <Image
        src={versace}
        width={100}
        height={100}
        alt='versace logo'
        className='w-[166.5px] h-[33px]'
        />
        <Image
        src={zara}
        width={100}
        height={100}
        alt='zara logo'
        className='w-[91px] h-[38px]'
        />
        <Image
        src={gucci}
        width={100}
        height={100}
        alt='gucci logo'
        className='w-[156px] h-[36px]'
        />
        <Image
        src={prada}
        width={100}
        height={100}
        alt='prada logo'
        className='w-[194px] h-[32px]'
        />
        <Image
        src={ck}
        width={100}
        height={100}
        alt='ck logo'
        className='w-[207px] h-[33px]'
        />
        
    </div>
  )
}