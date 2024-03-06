import React, { useState } from "react";
import { Layout } from "antd";

const { Header, Sider } = Layout;


const CustomLayout = ({ menu, children }) => {
  console.log("custom layout");

  return (
    <div className="flex flex-row bg-[#f5f5f5]">
      <div className="">
        <Layout className="">
          <Sider className="h-screen">
            <div className="demo-logo-vertical" />
            {menu}
          </Sider>
        </Layout>
      </div>
      <div className="flex flex-col">
        <Layout>
          <Header className="bg-white h-20 w-[69.2rem]">
    
          </Header>
          {children}
        </Layout>
      </div>
    </div>
  );
};

export default CustomLayout;
