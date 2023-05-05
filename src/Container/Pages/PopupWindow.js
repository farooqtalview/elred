import React, { useState } from "react";

const PopupWindow = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-gray-300 py-2 px-4 rounded-md text-center"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>
      {showPopup && (
        <div className="absolute z-10 top-10 left-0 bg-gray-900 text-white py-2 px-4 rounded-md grid grid-cols-2 grid-rows-2">
         
        </div>
      )}
    </div>
  );
};

export default PopupWindow;
