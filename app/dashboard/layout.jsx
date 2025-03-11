import React from 'react'
import Header from './_components/Header'
import SideNav from './_components/SideNav'
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='hidden md:block bg-white fixed mt-[100px] w-64 h-screen'> 
                <SideNav/>
            </div>
            <div>
                <Header/>
                <div className='md:ml-64 p-5'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
