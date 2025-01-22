"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const QandA = () => {
  const searchParams = useSearchParams();
  const count = searchParams.get("count"); // Get the number of questions from the query parameter
  const [fields, setFields] = useState<{ question: string; answer: string }[]>(
    []
  );

  useEffect(() => {
    if (count) {
      const numQuestions = parseInt(count, 10);
      setFields(Array.from({ length: numQuestions }, () => ({ question: "", answer: "" })));
    }
  }, [count]);

  const handleFieldChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    setFields((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSubmit = () => {
    console.log(fields); // Replace with your logic to handle the questions and answers
    alert("Questions and Answers submitted!");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">Add Questions and Answers</h1>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Question {Math.floor(index / 2) + 1}
          </label>
          <input
            type="text"
            value={field.question}
            onChange={(e) =>
              handleFieldChange(index, "question", e.target.value)
            }
            placeholder={`Enter Question ${Math.floor(index / 2) + 1}`}
            className="py-1 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <label className="block text-sm font-medium text-gray-700 mt-2">
            Answer
          </label>
          <input
            type="text"
            value={field.answer}
            onChange={(e) =>
              handleFieldChange(index, "answer", e.target.value)
            }
            placeholder={`Enter Answer`}
            className="py-1 px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-indigo-500 text-white py-2 rounded shadow hover:bg-indigo-600"
      >
        Submit
      </button>
    </div>
  );
};

export default QandA;
