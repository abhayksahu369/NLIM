import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-valorant-grey p-6">
      <h1 className="text-4xl font-bold text-center mb-6">AR Instructions</h1>
      <p className="text-lg text-center text-gray-400 mb-6">
        Follow the step-by-step guide to use AR features efficiently.
      </p>
      <ul className="text-gray-300 text-left list-disc pl-6">
        <li>Open the AR Scanner and scan the required QR code.</li>
        <li>Ensure the environment is well-lit for accurate detection.</li>
        <li>Interact with the 3D model to explore component details.</li>
        <li>Follow on-screen guidance for maintenance procedures.</li>
      </ul>
      <button
      
        onClick={() => navigate('/maintenance-view')}
        className="mt-6 bg-valorant-red text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Instructions;
