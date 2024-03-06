import React from "react";

const titleData = [
    {
      title: "title-1",
    },
    {
      title: "title-2",
    },
    {
      title: "title-3",
    },
    {
      title: "title-4",
    },
  ];

const Menu = ({ titleClick }) => {
  return (
    <>
      <div className="text-white mt-[6rem] text-center font-bold text-xl">
        Contents
      </div>
      <div className="mt-[1rem] flex flex-col ml-[3vw]">
        {titleData?.map((item) => (
          <button
            className="cursor-pointer p-4 bg-gray-500 w-[9vw] my-4 rounded-md text-lg font-semibold text-white"
            onClick={() => titleClick(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Menu;
