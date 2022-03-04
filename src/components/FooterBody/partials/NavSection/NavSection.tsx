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
      <div className="displayText">
        <h6>{displayText}</h6>
      </div>
      {navLinks && navLinks.length > 0 && (
        <nav>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink._id}>
                <NavLink {...navLink} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Component;
