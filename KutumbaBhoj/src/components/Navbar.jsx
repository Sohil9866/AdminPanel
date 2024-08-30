import React, { useState } from "react";
import assets from "../assets/assets";
import Profile from "../assets/Profile.jpg";
import {authStore} from "../store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);
  const {
    icons: { searchicon, message, notification },
  } = assets;
  return (
    <header className="bg-white -m-3 flex justify-between items-center px-10 mb-8 py-4">
      <div className="">
        <h1 className="text-[#CE1B22] font-bold text-[28px]">Welcome</h1>
        <p className="text-[#808080] font-josefin -mt-[2px] pl-[2px]">
          Your dashboard is ready
        </p>
      </div>
      <nav className="flex gap-8 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder=" Search for something"
            className="border py-3 w-[280px] rounded-full pl-14 outline-none bg-[#F5F7FA]"
          />
          <button className="absolute top-4 left-6">
            <img src={searchicon} />
          </button>
        </div>
        <div className="bg-[#F5F7FA] rounded-full">
          <img src={message} className="p-3" />
        </div>
        <div className="bg-[#F5F7FA] rounded-full">
          <img src={notification} className="p-3" />
        </div>
        <div className="relative inline-block">
          <img
            src={Profile}
            className="size-[50px] rounded-full"
            onClick={() => setVisible(!isVisible)}
          />
          {isVisible ? (
            <div className="absolute origin-top-right right-px mt-1 w-32 shadow-lg">
              <button
                className="bg-white border px-6 py-2 rounded-md absolute top-3"
                onClick={() => {authStore.getState().logout();
                  navigate("/login");
                }
              }
              >
                <ul>
                  <li>Logout</li>
                </ul>
              </button>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
