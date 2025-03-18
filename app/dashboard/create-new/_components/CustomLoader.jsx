import React from 'react'
import Image from 'next/image'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

const CustomLoader = ({loading}) => {
  return (
    <AlertDialog open={loading}>
    <AlertDialogContent>
           <div className="bg-white flex flex-col items-center justify-center">
               <Image src={'/soon.gif'} width={200} height={200}/>
               <h2 className='text-gray-600'>Generating your Video....Do not Refresh</h2>
           </div>
    </AlertDialogContent>
  </AlertDialog>  
  )
}

export default CustomLoader
