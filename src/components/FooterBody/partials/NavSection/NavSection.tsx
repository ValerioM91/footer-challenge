import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { TNavSection } from "../../../../types/DataTypes";
import NavLink from "../NavLink";

type TProps = {
  className: string;
  open: boolean;
  handleOpen: () => void;
} & TNavSection;

const Component = ({
  className,
  highlightOnMobile,
  navLinks,
  displayText,
  open,
  handleOpen,
}: TProps) => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef<HTMLUListElement>(null);

  const handleSetHeight = () => {
    if (!heightRef.current) return;
    setHeight(heightRef.current.clientHeight);
  };

  useLayoutEffect(() => {
    handleSetHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSetHeight);
    return () => {
      window.removeEventListener("resize", handleSetHeight);
    };
  }, []);

  const handleClick = () => {
    if (!highlightOnMobile) {
      handleOpen();
    }
  };

  return (
    <div className={className}>
      <div className="displayText" onClick={handleClick}>
        <h6>{displayText}</h6>
      </div>
      {navLinks && navLinks.length > 0 && (
        <nav
          style={!highlightOnMobile ? { height: `${open ? height : 0}px` } : {}}
        >
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
