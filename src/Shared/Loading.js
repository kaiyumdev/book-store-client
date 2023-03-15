import React from "react";

const Loading = () => {
  return (
    <div>
      <button type="button" className="grid place-content-center bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
};

export default Loading;
