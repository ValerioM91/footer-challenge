import React from "react";
import { TNavLink } from "../../../../types/DataTypes";

type TProps = {
  className: string;
} & TNavLink;

const Component = ({ className, url, tag, displayText, icon }: TProps) => {
  return (
    <div className={className}>
      <a href={url} className="footer-nav-link" title={displayText}>
        {icon && (
          <div
            className="footer-nav-iconLink"
            dangerouslySetInnerHTML={{ __html: icon }}
          ></div>
        )}
        {!icon && displayText && (
          <span className="footer-nav-textLink">{displayText}</span>
        )}
        {tag && <span className="footer-nav-linkTag">{tag}</span>}
      </a>
    </div>
  );
};

export default Component;
