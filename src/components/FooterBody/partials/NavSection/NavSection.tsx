import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { TNavSection } from "../../../../types/DataTypes";
import NavLink from "../NavLink";

const Component = ({
  className,
  highlightOnMobile,
  navLinks,
  displayText,
  name,
}: // open,
// handleOpen,
{ className: string; open: boolean } & TNavSection) => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (!heightRef.current) return;
    setHeight(heightRef?.current?.clientHeight);
  }, []);

  const open = true;

  return (
    <div className={className}>
      <div className="displayText">
        <h6>{displayText}</h6>
      </div>
      {navLinks && navLinks.length > 0 && (
        <nav style={{ height: `${open ? height : 0}px` }}>
          <ul ref={heightRef}>
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
