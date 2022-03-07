import React from "react";
import { useFooterContext } from "../../contexts/FooterContext";
import NavSectionList from "./partials/NavSectionList";

type TProps = { className: string };

const Component = ({ className }: TProps) => {
  const { brandLogo } = useFooterContext();
  return (
    <div className={className}>
      {brandLogo && (
        <a href="#" className="logo" title="Shogun">
          <div dangerouslySetInnerHTML={{ __html: brandLogo }}></div>
        </a>
      )}
      <div className="navigation">
        <NavSectionList />
      </div>
    </div>
  );
};

export default Component;
