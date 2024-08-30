import React, { useId, forwardRef } from "react";



const Input = (
  ({ name, label, type, err, className = "", ...props }) => {
    const id = useId();
    return (
      <>
        <div>
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={id}
                className={`block text-[11px] font-josefin ml-3 font-medium text-[#0D693C] ${className}`}
              >
                {label}
              </label>
            )}
          </div>
          <div>
            <input
              type={type}
              className={`block w-full border-[#0D693C] border-b-2 py-[6px] px-1 text-green-900 outline-none sm:text-sm sm:leading-6 ${className} `}
              name={name}
              id={id}
              {...props}
            />
          </div>
          {err !== null ? (
            <div className="flex items-center text-red-500 text-xs">
              <span className="text-red-500">{err}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
);

export default Input;
