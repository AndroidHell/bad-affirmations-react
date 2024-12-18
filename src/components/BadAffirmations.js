import React, { useState, useEffect } from "react";

const BadAffirmation = () => {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    fetch("/badAffirmations.json")
      .then((response) => response.json())
      .then((data) => {
        const randomAffirmation = data[Math.floor(Math.random() * data.length)];
        setAffirmation(randomAffirmation);
      })
      .catch((error) => console.error("Error loading affirmations", error));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 text-center">
      <div className="p-6 max-w-md bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-red-600">Bad Affirmation</h1>
        <p className="mt-4 text-lg text-gray-700 italic">{affirmation}</p>
      </div>
    </div>
  );
};

export default BadAffirmation;
