"use client";

import React, { useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const ExamSection = () => {
  const [title, setTitle] = useState("");
  const [indexNo, setIndexNo] = useState("");
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const router = useRouter();

  const handleEvaluate = () => {
    // Pass indexNo and answers as query parameters
    const queryParams = {
      indexNo,
      answers: JSON.stringify(answers),
    };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/sections/DisplayMarks?${queryString}`);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  return (
    <div id="Exam-section" className="flex justify-center h-screen w-full text-black">
      <div className="bg-slate-200 mx-14 my-auto h-3/4 w-3/6 rounded-md">
        <a href="../">
          <IconArrowLeft className="animate-pulse" />
        </a>
        {/* Select Exam and Enter Index No */}
        <div className="mb-4 p-3 grid grid-cols-2">
          <div>
            <label htmlFor="select-exam" className="block font-medium text-gray-700 text-lg">
              Select Exam
            </label>
            <select
              id="select-exam"
              className="mt-1 block w-2/4 py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select an exam
              </option>
              <option value="CMIS - 4114">CMIS - 4114</option>
              <option value="CMIS - 4112">CMIS - 4112</option>
              <option value="CMIS - 4124">CMIS - 4124</option>
              <option value="CMIS - 4113">CMIS - 4113</option>
            </select>
          </div>
          <div>
            <label htmlFor="index-no" className="block font-medium text-gray-700 text-lg">
              Enter Index No
            </label>
            <input
              id="index-no"
              type="text"
              value={indexNo}
              onChange={(e) => setIndexNo(e.target.value)}
              placeholder="202030"
              className="mt-1 block w-2/4 py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Answer Inputs */}
        <div className="grid grid-row gap-3 mb-4 p-3">
          {answers.map((answer, index) => (
            <div key={index}>
              <label className="block font-medium text-gray-700 text-lg">
                Answer {index + 1}
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder={`Enter Answer ${index + 1} Here`}
                className="mt-1 block w-full py-1 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          ))}
        </div>

        {/* Evaluate Button */}
        <div className="flex justify-end p-3">
          <button
            onClick={handleEvaluate}
            className="mt-4 px-3 bg-indigo-500 text-white py-2 rounded shadow hover:bg-indigo-600"
          >
            Evaluate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamSection;
