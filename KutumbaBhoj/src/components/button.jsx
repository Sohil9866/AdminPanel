import React from "react";
import { authStore } from "../store";
import { bouncy } from "ldrs";

bouncy.register();

export const Button = ({ name, className = "", ...props }) => {
  const loading = authStore((store)=>store.loading)
  return (
    <button
      type="submit"
      className={` py-[0.7rem] bg-[#0D693C] rounded-md text-white font-Josefin Sans w-full ${className}`}
      {...props}
    >
      { loading? (
        <l-bouncy size="38" speed="1.75" color="white"></l-bouncy>
      ) : (
        name
      )}
    </button>
  );
};
