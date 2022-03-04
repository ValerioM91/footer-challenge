import React from "react";
import { TNavLink } from "../../../../types/DataTypes";

const Component = ({
  className,
  url,
  tag,
  displayText,
  icon,
}: { className: string } & TNavLink) => {
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
