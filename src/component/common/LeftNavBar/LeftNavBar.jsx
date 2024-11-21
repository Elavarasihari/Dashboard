import React from "react";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { menuItems, otherMenu } from "../../../constants/localConstants";

function LeftNavBar({ setActiveTab, activeTab }) {
  return (
    <div className="w-100 h-dvh border-r border-stone-300 flex-col justify-between hidden sm:flex">
      <section>
        <header className="py-3 mx-3 font-bold text-xl flex items-center justify-between border-b border-stone-300">
          <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-indigo-600"></div>
          <p>BoardUp<sup className="text-[7px] top-[-1.5em]" >TM</sup></p>
          </div>
          <RiMenuUnfold4Line color="#64748b" />
        </header>
        <section>
          <div className="m-3 flex items-center gap-3 bg-gray-100 p-2 rounded-md">
            <div className="w-10 h-10 bg-slate-800 rounded-md"></div>
            <div>
              <p className="text-sm font-bold">Rooks Company</p>
              <p className="text-xs text-slate-500">Team - 20 Members</p>
            </div>
          </div>
        </section>
        <nav className="px-3">
          {menuItems.map((menu) => {
            return (
              <div
                className={` ${
                  menu.category === "MAIN MENU" ? "pb-3 border-b border-stone-300" : "pt-3"
                }`}
              >
                <p className="text-xs text-slate-400 px-2">{menu.category}</p>
                <div>
                  {Array.isArray(menu.items) &&
                    menu.items.map((menuItems) => (
                      <div
                        onClick={() => setActiveTab(menuItems.label)}
                        className={`flex items-center gap-3 p-2 cursor-pointer text-gray-500 rounded-md ${
                          activeTab === menuItems.label
                            ? "text-indigo-700 bg-indigo-200 border border-indigo-400"
                            : ""
                        }`}
                      >
                        {activeTab === menuItems.label
                          ? menuItems.focusedIcon
                          : menuItems.icon}
                        <p className="text-sm">{menuItems.label}</p>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </nav>
      </section>
      <footer className="px-3 mt-10">
        <p className="text-xs text-slate-400 px-2">Other</p>
        {otherMenu.map((menuItem) => (
          <div className="flex items-center gap-3 p-2">
            {menuItem.icon}
            <p className="text-sm text-gray-500">{menuItem.label}</p>
          </div>
        ))}
      </footer>
    </div>
  );
}

export default LeftNavBar;
