'use client'
import React, { useState } from 'react'
import { Answers } from '../Dashboard/Answers';
import { Dashboard } from '../Dashboard/Dashboard';

export const SidebarItems = () => {
     const [selectedRoute, setSelectedRoute] = useState("Dashboard");

     const routes = [
          {title: "Dashboard"},
          {title: "Evaluate"},
          {title: "Grades"}
     ];

  return (
    <div className='space-y-10'>
        {routes.map((route)=>(
          <Items
               key={route.title}
               title={route.title}
               selected={route.title==selectedRoute}
               onClick={()=>setSelectedRoute(route.title)}
          />
        ))}
    </div>
  )
}
const Items = ({
     selected,
     title,
     onClick,
}:{
     selected: boolean;
     title: string;
     onClick: () => void;
}) => {
     return(
          <button
          onClick={onClick}
          className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
            selected
              ? "bg-white text-stone-950 shadow"
              : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
          }`}
        >
          <span>{title}</span>
        </button>
     );
};