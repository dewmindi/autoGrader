"use client";
import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar';
import { Dashboard } from './Dashboard';

export const Answers = () => {

  const handleDownload = (filename: string) => {
    const element = document.createElement('a');
    element.href = `/sample_pdfs/${filename}`; // Replace with actual path when integrated with the backend
    element.download = filename;
    document.body.appendChild(element); // Append to the body
    element.click(); // Programmatically click to trigger download
    document.body.removeChild(element); // Clean up
  };

  return (
    <div className="bg-white rounded-lg pb-4 mt-2 shadow h-[200vh]">
              <h1 className="text-2xl font-bold mb-6">Answers</h1>

{/* Table-like layout */}
<div className="bg-white border border-gray-300 rounded-lg">
  <div className="flex items-center justify-between px-4 py-3 border-b">
    <h2 className="text-lg font-medium">Manage your answers here</h2>
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
      + Add Answer
    </button>
  </div>

  {/* Table Header */}
  <div className="grid grid-cols-5 gap-4 px-4 py-2 bg-gray-100 font-medium">
    <div>Student ID</div>
    <div>Answer Sheet</div>
    <div>Time</div>
    <div>Date</div>
    <div>Download</div>
  </div>

  {/* Table Rows */}
  <div className="grid grid-cols-5 gap-4 px-4 py-2 border-b">
    <div>202030</div>
    <div>Jane Doe</div>
    <div className="text-green-600">00:01:15</div>
    <div>22/11/2024</div>
    <div>
      <button
        className="px-4 py-1 bg-black text-white rounded hover:bg-stone-800"
        onClick={() => handleDownload('jane_doe_answer.pdf')}
      >
        Download
      </button>
    </div>
  </div>
  <div className="grid grid-cols-5 gap-4 px-4 py-2 border-b">
    <div>202130</div>
    <div>John Smith</div>
    <div className="text-green-600">00:01:15</div>
    <div>22/11/2024</div>
    <div>
      <button
        className="px-4 py-1 bg-black text-white rounded hover:bg-stone-800"
        onClick={() => handleDownload('jane_doe_answer.pdf')}
      >
        Download
      </button>
    </div>
  </div>
  <div className="grid grid-cols-5 gap-4 px-4 py-2 border-b">
    <div>202174</div>
    <div>Emily Johnson</div>
    <div className="text-yellow-600">00:01:15</div>
    <div>22/11/2024</div>
    <div>
      <button
        className="px-4 py-1 bg-black text-white rounded hover:bg-stone-800"
        onClick={() => handleDownload('jane_doe_answer.pdf')}
      >
        Download
      </button>
    </div>
  </div>
</div>
    </div>
  );
};    