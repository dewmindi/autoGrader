import { EvaluateScreen } from '@/app/components/Dashboard/Evaluate';
import { Sidebar } from '@/app/components/Sidebar/Sidebar';
import React from 'react'

export const EvaluatePage = () => {
  return <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
  <Sidebar/>
  <EvaluateScreen/>
</main>;
}
