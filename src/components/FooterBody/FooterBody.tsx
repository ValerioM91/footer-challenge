import React from "react";
import { useFooterContext } from "../../contexts/FooterContext";
import NavSectionList from "./partials/NavSectionList";

const Component = ({ className }: { className: string }) => {
  const { brandLogo } = useFooterContext();
  return (
    <div className={className}>
      {brandLogo && (
        <div
          className="logo"
          dangerouslySetInnerHTML={{ __html: brandLogo }}
        ></div>
      )}
      <div className="navigation">
        <NavSectionList />
      </div>
    </div>
  );
};

export default Component;
