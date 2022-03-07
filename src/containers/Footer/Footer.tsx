import React from "react";
import Container from "../../components/Container";
import BottomFooter from "../../components/BottomFooter";
import FooterContext from "../../contexts/FooterContext";
import {
  navSections,
  baselineLinks,
  socialLinks,
  legalText,
  brandLink,
  brandLogo,
} from "../../mockData.js";
import FooterBody from "../../components/FooterBody";

type TProps = { className: string };

const Component = ({ className }: TProps) => {
  return (
    <FooterContext.Provider
      value={{
        navSections,
        baselineLinks,
        socialLinks,
        legalText,
        brandLink,
        brandLogo,
      }}
    >
      <footer className={className}>
        <Container>
          <FooterBody />
          <BottomFooter
            socialLinks={socialLinks}
            baselineLinks={baselineLinks}
            legalText={legalText}
          />
        </Container>
      </footer>
    </FooterContext.Provider>
  );
};

export default Component;
