import React from "react";
import { TNavSection } from "../../../../types/DataTypes";
import NavLink from "../NavLink";

const Component = ({
  className,
  highlightOnMobile,
  navLinks,
  displayText,
  name,
}: { className: string } & TNavSection) => {
  return (
    <div className={className}>
      <h6>{displayText}</h6>
      {navLinks?.map((navLink) => {
        <NavLink key={navLink._id} {...navLink} />;
      })}
    </div>
  );
};

export default Component;
