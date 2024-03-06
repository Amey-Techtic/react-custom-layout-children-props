import React, { useState } from "react";
import CustomLayout from "./CustomLayout";
import Menu from "./Menu";

const HomePage = () => {
  const [title, setTitle] = useState("No title");

  const titleClick = (title) => {
    console.log("title: ", title);
    setTitle(title);
  };

  const menu = <Menu titleClick={titleClick} />;
  return (
    <CustomLayout menu={menu}>
      <div className="mt-10 p-10 bg-white w-[77vw] mx-auto ml-10">
        Content: {title ?? title}
      </div>
    </CustomLayout>
  );
};

export default HomePage;
