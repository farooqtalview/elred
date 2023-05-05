import React from "react";

function Button({ type, buttonText, isLoading, onclick, className, disabled }) {
  return (
    <>
      <button
        onClick={onclick}
        type={type}
        disabled={disabled}
        className={` font-bold   focus:outline-none rounded-3xl p-3 border ${className} `}
      >
        <div className="px-2 flex flex-row items-center justify-center ">
          {isLoading && (
            <div className="mx-2">
              <svg
                className="  w-5 animate-spin "
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
          <div className=""> {buttonText}</div>
        </div>
      </button>
    </>
  );
}

export default Button;
