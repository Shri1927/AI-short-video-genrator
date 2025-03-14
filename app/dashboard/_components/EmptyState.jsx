import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const EmptyState = () => {
  return (
    <div className='flex flex-col items-center mt-10 border-2 border-dotted p-5 py-24 rounded-md h-96 '>
      <h2>You don't have any Short Video</h2>
      <Link href={'/dashboard/create-new'}>
      <Button className='bg-violet-600 cursor-pointer' >Create New Short Video</Button>
      </Link>
    </div>
  )
}

export default EmptyState
