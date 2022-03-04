import React from "react";
import NavSection from "./partials/NavSection";

const Component = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="logo">LOGO HERE</div>
      <div className="navigation">
        <NavSection />
      </div>
    </div>
  );
};

export default Component;
