import { Answers } from '@/app/components/Dashboard/Answers';
import { Dashboard } from '@/app/components/Dashboard/Dashboard';
import { Sidebar } from '@/app/components/Sidebar/Sidebar';
import React from 'react';

export default function AnswersPage() {
  return <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
  <Sidebar/>
  <Answers/>
</main>;
}
