'use client' 
import React from 'react'
import { Button } from "@/components/ui/button"
import EmptyState from './_components/EmptyState';

const DashBoard = () => {
  const [videoList, setVideoList] = React.useState([]);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-violet-600'>Dashboard</h2>
        <Button className='bg-violet-600'>+ Create New</Button>
      </div>

       {videoList?.length==0&&<div>
          <EmptyState/>
        </div>}
    </div>
  )
}

export default DashBoard
