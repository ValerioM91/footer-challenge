import React, { ReactNode } from "react";

const Component = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

export default Component;
