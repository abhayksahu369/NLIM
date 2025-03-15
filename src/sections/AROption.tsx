import React, { useState } from 'react';
import { ArrowLeft, Scan, Brain, Cuboid as Cube, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import QRScanner from './Options/QRScanner';

export const AROption: React.FC = () => {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState<boolean>(false);

  const handleScanClick = (): void => {
    setShowScanner(true);
  };

  const handleScanSuccess = (scannedUrl: string): void => {
    setShowScanner(false);
    try {
      const url = new URL(scannedUrl);
      console.log(url);
      window.location.href = scannedUrl;
    } catch (error) {
      console.warn(error);
      alert("Invalid QR code. Please try again.");
    }
  };

  const handleCloseScanner = (): void => {
    setShowScanner(false);
  };

  return (
    
    <div className="bg-valorant-grey py-12 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        
      <button
          onClick={() => navigate('/machines')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Machines
        </button>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10">
          AR Capabilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Scan Now */}
          <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
            onClick={handleScanClick}
          >
            <Scan className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Scan Now</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Instant equipment scanning and analysis
            </p>
          </div>

          {/* Predictive Scan */}
          <div className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer">
            <Brain className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">Predictive Scan</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              AI-powered maintenance forecasting
            </p>
          </div>

          {/* 3D Dissection */}
          <div className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer">
            <Cube className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">3D Dissection</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Detailed component visualization
            </p>
          </div>

          {/* AR Instructions */}
          <div
            className="bg-valorant-black p-5 sm:p-6 rounded-lg text-center hover:scale-105 transition-all cursor-pointer"
            onClick={() => navigate("/Instructions")}
          >
            <BookOpen className="w-10 sm:w-14 h-10 sm:h-14 text-valorant-red mx-auto mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-1">AR Instructions</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Step-by-step maintenance guides
            </p>
          </div>
        </div>
      </div>

      {showScanner && (
        <QRScanner onClose={handleCloseScanner} onScanSuccess={handleScanSuccess} />
      )}
    </div>
  );
};

export default AROption;
