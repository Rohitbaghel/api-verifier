import React from "react";

function Spinner() {
  return (
    <div className="">
        <p className="text-center py-3 text-xl ">Loading...</p>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
}

export default Spinner;
