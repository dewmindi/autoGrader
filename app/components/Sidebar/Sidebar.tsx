import React from 'react'
import { AccountToggle } from './AccountToggle'
import { SidebarItems } from './SidebarItems'

export const Sidebar = () => {
  return (
    <div>
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle/>
        <SidebarItems/>
        </div>
        <div className='flex items-center justify-start sticky top-[calc(100vh_-_48px_-_16px)]
        flex-colh-12 border-t px-2 border-stone-300  text-sm'>
        <button>
          Logout
        </button>
        </div>
    </div>
  )
}
