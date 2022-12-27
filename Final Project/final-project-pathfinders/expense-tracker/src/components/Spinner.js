import React from "react";
import { Spin } from "antd";

// function to display spinner while loading resources
function Spinner() {
  return (
    <div className="spinner">
      <Spin color='gray' style={{color:'gray'}} size='large'/>
    </div>
  );
}

export default Spinner;
