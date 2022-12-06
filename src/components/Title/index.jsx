import React from "react";
import "./title.css";
const Index = ({ children, underline }) => {
  return (
    <>
      <h2 className="section-title">{children}</h2>
      {underline && <div className="underline"></div>}
    </>
  );
};

export default Index;
