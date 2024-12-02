import React from 'react'
import { Navbar } from './navbar'
import { Subjects } from './subjects'

export const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg pb-4 mt-2 shadow h-[200vh]'>
        <Navbar/>
        <Subjects/>
    </div>
  )
}

