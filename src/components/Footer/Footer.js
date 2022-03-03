import React from "react";
import Container from "../Container";
import BottomFooter from "../BottomFooter";

const Component = ({
  className,
  baselineLinks,
  brandLink,
  brandLogo,
  legalText,
  navSections,
  socialLinks,
}) => {
  return (
    <footer className={className}>
      <Container>
        <BottomFooter
          socialLinks={socialLinks}
          baselineLinks={baselineLinks}
          legalText={legalText}
        />
      </Container>
    </footer>
  );
};

export default Component;
