import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <div className='p-3 px-5 flex items-center justify-between'>
       <div className='flex gap-3 items-center'>
          <Image src={'/logo2.jpg'} alt='logo' width={80} height={100}/>
          <h2 className='font-bold text-xl'>AI - Short Vid </h2>
       </div>
       <div className='flex gap-3 items-center'>
          <Button className='bg-violet-600 hover:bg-violet-600'>Dashboard</Button>
          <UserButton/>
       </div>
    </div>
  )
}

export default Header
