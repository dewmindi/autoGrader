"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const DisplayMarks = () => {
  const searchParams = useSearchParams();
  const indexNo = searchParams.get("indexNo") || "";
  const answers = JSON.parse(searchParams.get("answers") || "[]");

  const [marks, setMarks] = useState<number[]>(Array(answers.length).fill(0));
  const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);

  const handleMarkChange = (index: number, value: number) => {
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  return (
    <div className="flex justify-center h-screen w-full text-black">
      <div className="bg-slate-200 mx-14 my-auto h-3/4 w-3/6 rounded-md p-4">
        <h1 className="text-xl font-bold">Marks for Index No: {indexNo}</h1>
        <div className="mt-4">
          {answers.map((answer: string, index: number) => (
            <div key={index} className="mb-3">
              <h2 className="font-medium text-lg">Answer {index + 1}: {answer}</h2>
              <input
                type="number"
                value={marks[index]}
                onChange={(e) => handleMarkChange(index, Number(e.target.value))}
                placeholder="Enter marks"
                className="mt-1 block w-full py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 font-bold text-lg">Total Marks: {totalMarks}</div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => alert("Marks saved to database (backend pending).")}
            className="px-3 bg-indigo-500 text-white py-2 rounded shadow hover:bg-indigo-600"
          >
            Save Marks
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayMarks;
