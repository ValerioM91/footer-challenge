import styled, { css } from "styled-components";
import Component from "./NavSection";

const NavSection = styled(Component)`
  margin-bottom: 0;
  .displayText {
    padding: 2rem 0.5rem;
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
    ${({ highlightOnMobile }) =>
      !highlightOnMobile
        ? css`
            .displayText {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid ${({ theme }) => theme.colors.white};
            }
            .displayText:after {
              ${({ open }) =>
                open
                  ? css`
                      content: "-";
                    `
                  : css`
                      content: "+";
                    `};
              font-size: ${({ theme }) => theme.fontSizes.mobile.medium};
            }
            nav {
              height: 0px;
              overflow: hidden;
              transition: height 0.2s;
              padding-left: 2rem;
            }
          `
        : css`
            .displayText {
              position: relative;
              display: flex;
              justify-content: space-between;
            }
            nav {
              ul {
                display: flex;
                justify-content: space-between;
              }
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
