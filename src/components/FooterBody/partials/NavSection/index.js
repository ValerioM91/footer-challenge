import styled, { css } from "styled-components";
import Component from "./NavSection";

const NavSection = styled(Component)`
  margin-bottom: 0;
  .displayText {
    padding: 2rem 0;
    h6 {
      font-size: ${({ theme }) => theme.fontSizes.mobile.medium};
      margin-bottom: 0;
    }
  }
  nav {
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.mdDown} {
    .displayText {
      border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }

    ${({ highlightOnMobile }) =>
      !highlightOnMobile &&
      css`
        nav {
          height: 0px;
          overflow: hidden;
          transition: height 0.2s;
        }
      `}
    ul {
      padding: 2rem 0;
    }
  }
  @media ${({ theme }) => theme.device.mdUp} {
    .displayText {
      padding: 0;
      h6 {
        margin-bottom: 3rem;
        font-size: ${({ theme }) => theme.fontSizes.tablet.medium};
      }
    }
  }

  @media ${({ theme }) => theme.device.lgUp} {
    margin-bottom: 0;
  }
`;

export default NavSection;
