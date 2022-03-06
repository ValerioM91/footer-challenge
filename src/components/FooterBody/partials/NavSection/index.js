import styled, { css } from "styled-components";
import Component from "./NavSection";

const NavSection = styled(Component)`
  margin-bottom: 0;

  .displayText {
    padding: 2rem 0;
    h6 {
      font-size: ${({ theme }) => theme.fontSizes.mobile.large};
      margin-bottom: 0;
    }
  }

  li:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media ${({ theme }) => theme.device.mdDown} {
    ul {
      padding: 2rem 0;
    }

    ${({ highlightOnMobile, open }) =>
      !highlightOnMobile
        ? css`
            .displayText {
              display: flex;
              justify-content: space-between;
              position: relative;
              &:before {
                content: "";
                position: absolute;
                bottom: 0;
                left: -1rem;
                right: -1rem;
                height: 1px;
                background-color: ${({ theme }) => theme.colors.white};
              }
              &:after {
                font-size: ${({ theme }) => theme.fontSizes.mobile.large};
                font-weight: 700;
                content: ${open ? "'-'" : "'+'"};
              }
            }
            nav {
              height: 0px;
              overflow: hidden;
              transition: height 0.4s ease-out;
              padding-left: 2rem;
            }
          `
        : css`
            .displayText {
              position: relative;
              display: flex;
              justify-content: space-between;
            }
            ul {
              padding-top: 0;
              display: flex;
              justify-content: space-between;
            }
          `}
  }

  @media ${({ theme }) => theme.device.mdUp} {
    .displayText {
      padding: 0;
      h6 {
        margin-bottom: 3rem;
        font-size: ${({ theme }) => theme.fontSizes.tablet.large};
      }
    }
    nav {
      height: auto !important;
    }
  }

  @media ${({ theme }) => theme.device.lgUp} {
    margin-bottom: 0;
  }
`;

export default NavSection;
