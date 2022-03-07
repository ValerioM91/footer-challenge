import React, { ReactNode } from "react";

type TProps = { className: string; children: ReactNode };

const Component = ({ className, children }: TProps) => {
  return <div className={className}>{children}</div>;
};

export default Component;
