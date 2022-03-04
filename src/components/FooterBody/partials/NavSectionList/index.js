import styled from "styled-components";
import Component from "./NavSectionList";

const NavSectionList = styled(Component)`
  @media ${({ theme }) => theme.device.mdUp} {
    display: grid;
    width: 57vw;
    grid-column-gap: 7.1vw;
    grid-row-gap: 7.1vw;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    .displayText {
      padding: 0;
      h6 {
        margin-bottom: 3rem;

        font-size: ${({ theme }) => theme.fontSizes.tablet.medium};
      }
    }
  }

  @media ${({ theme }) => theme.device.lgUp} {
    width: 71.5vw;
    grid-column-gap: 3.55vw;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .displayText {
      padding: 0;
      h6 {
        margin-bottom: 3rem;

        font-size: ${({ theme }) => theme.fontSizes.tablet.medium};
      }
    }
  }
`;

export default NavSectionList;
