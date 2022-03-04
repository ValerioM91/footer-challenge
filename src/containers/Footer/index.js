import styled from "styled-components";
import Component from "./Footer";

const Footer = styled(Component)`
  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 3rem;
`;

export default Footer;
