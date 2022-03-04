export type TGenericLink = {
  _id?: string;
  url?: string;
};

export type TNavLink = TGenericLink & {
  tag?: string;
  displayText?: string;
  icon?: string;
};

export type TNavSection = TGenericLink & {
  highlightOnMobile?: boolean;
  navLinks?: TNavLink[];
  displayText?: string;
  name?: string;
};

export type TBaseLink = TGenericLink & {
  displayText?: string;
  name?: string;
};

export type TSocialLink = TGenericLink & {
  icon?: string;
  name?: string;
};
