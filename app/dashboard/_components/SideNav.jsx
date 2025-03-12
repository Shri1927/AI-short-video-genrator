'use client'
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const SideNav = () => {
    const MenuOtions =[
        {
            id:1,
            name:'Dashboard',
            path:'/dashboard',
            icon:PanelsTopLeft
        },
        {
            id:2,
            name:'Create New',
            path:'/dashboard/create-new',
            icon:FileVideo
        },
        {
            id:3,
            name:'Upgrade',
            path:'/upgrade',
            icon:ShieldPlus
        },
        {
            id:4,
            name:'Account',
            path:'/accounts',
            icon:CircleUser
        },
    ]

    const path = usePathname();
    console.log(path);
    
  return (
    <div className='w-64 h-screen shadow-md p-5'>
      <div className='grid gap-3'>
        {MenuOtions.map( (item , index) =>(
            <Link href={item.path} key={index}>
            <div className={`flex gap-3 items-center p-3 
            hover:bg-violet-600 hover:text-white rounded-md cursor-pointer
            ${path == item.path && 'bg-violet-600 text-white'}`}>
                <item.icon size={24} />
                <p>{item.name}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
