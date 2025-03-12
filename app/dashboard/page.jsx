'use client' 
import React from 'react'
import { Button } from "@/components/ui/button"
import EmptyState from './_components/EmptyState';
import Link from 'next/link'

const DashBoard = () => {
  const [videoList, setVideoList] = React.useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-violet-600'>Dashboard</h2>
        <Link href={'/dashboard/create-new'}>
            <Button className='bg-violet-600 hover:bg-violet-600 cursor-pointer'>+ Create New</Button>
        </Link>
      </div>
    
       {videoList?.length==0&&<div>
          <EmptyState/>
        </div>}
    </div>
  )
}

export default DashBoard
