import styled from "styled-components";
import Component from "./NavSectionList";

const NavSectionList = styled(Component)`
  max-width: 93rem;

  @media ${({ theme }) => theme.device.mdUp} {
    min-height: auto !important;
    display: grid;
    width: 57vw;
    grid-column-gap: 7.1vw;
    grid-row-gap: 10rem;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  @media ${({ theme }) => theme.device.lgUp} {
    width: 71.5vw;
    grid-column-gap: 3.55vw;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.device.xlUp} {
    grid-column-gap: 5.15rem;
  }
`;

export default NavSectionList;
