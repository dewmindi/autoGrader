import React from 'react'
import Link from 'next/link'

export const Imgt = () => {
  return (
    <>
    <Card title={"IMGT 4111"}/>
    <Card title={"IMGT 4112"}/>
    <Card title={"IMGT 4113"}/>
    <Card title={"IMGT 4114"}/>
    </>
  )
}

const Card = ({title}:{title:String}) => {
    return <div className='p-4 bg-stone-600 col-span-2 rounded-md h-40'>
        <Link href={"/dashboard/answers"}>
            <div className='border-t mb-4 mt-20 pb-4 border-stone-950 h-30'>
                <span>{title}</span>
            </div>
        </Link>
    </div>
}