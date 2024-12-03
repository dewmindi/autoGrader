import React from 'react';
import { Navbar } from './navbar';
import { Subjects } from './subjects';

interface DashboardProps {
  children?: React.ReactNode; // Allow Dashboard to accept children
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg pb-4 mt-2 shadow h-[200vh]">
      <Navbar />
      {children ? <div>{children}</div> : <Subjects />}
    </div>
  );
};
