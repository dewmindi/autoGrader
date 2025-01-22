"use client"
import React from 'react'
import { useState } from 'react';
import { format } from 'date-fns'
import { IconArrowAutofitLeft, IconArrowLeft } from '@tabler/icons-react';
import { Button } from '@mui/material';
import { useRouter } from "next/navigation";

const ExamSection = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("2025-01-30");
  const [time, setTime] = useState("08:30");
  const [duration, setDuration] = useState("1h 45m");

  const formattedTime = `${format(
    new Date(`${date}T${time}`),
    "h:mm a"
  )} - ${duration}`;

  const [questionCount, setQuestionCount] = useState(0);
  const router = useRouter();

  const handleIncrement = () => {
    setQuestionCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuestionCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleSubmit = () => {
    router.push(`/sections/QandA?count=${questionCount}`);
  };



  return (
    <div id='Exam-section' className='flex justify-center h-screen w-full text-black'>
      <div className=' bg-slate-200 mx-14 my-auto h-2/4 w-3/6 rounded-md'>
        <a href="../"><IconArrowLeft className='animate-pulse' /></a>
        {/* Course Code*/}
        <div className="mb-4 p-3 grid grid-cols-2">
          <div>
            <label htmlFor="Course Code" className="block font-medium text-gray-700 text-lg">
              Course Code
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="CMIS - 4114"
              className="mt-1 block w-2/4 py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
            />
          </div>
          <div>
            <label htmlFor="Course Code" className="block font-medium text-gray-700 text-lg">
              Examination
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Mid / Tutorial"
              className="mt-1  block w-3/4 py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
            />
          </div>
        </div>

        {/* Date, Time, Duration */}
        <div className="grid grid-cols-3 gap-3 mb-4 p-3">
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="py-1 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-lg font-medium text-gray-700">
              Time
            </label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="py-1 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-lg font-medium text-gray-700">
              Duration
            </label>
            <input
              id="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="1h 45m"
              className="py-1 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>

          {/* No Of Questions */}
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-lg font-medium text-gray-700"
            >
              No of Questions
            </label>
            <div className="flex items-center space-x-2 mt-1">
              <button
                onClick={handleDecrement}
                className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <input
                id="number"
                type="text"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value) || 0)}
                placeholder="Enter Number"
                className="py-1 px-4 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg text-center"
              />
              <button
                onClick={handleIncrement}
                className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-end p-3 '>

          <button
            onClick={handleSubmit}
            className="mt-4 px-3 bg-indigo-500 text-white py-2 rounded shadow hover:bg-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamSection