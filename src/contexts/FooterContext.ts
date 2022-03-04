import { createContext, useContext } from "react";
import { TBaseLink, TNavSection, TSocialLink } from "../types/DataTypes";

type TFooterContext = {
  brandLink?: string;
  brandLogo?: string;
  legalText?: string;
  navSections?: TNavSection[];
  baselineLinks?: TBaseLink[];
  socialLinks?: TSocialLink[];
};

const FooterContext = createContext<TFooterContext>({});

export default FooterContext;

export const useFooterContext = () => useContext(FooterContext);
