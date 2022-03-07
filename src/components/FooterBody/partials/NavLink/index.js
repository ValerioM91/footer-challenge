import styled from "styled-components";
import Component from "./NavLink";

const NavLink = styled(Component)`
  .footer-nav-link {
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.mobile.medium};
    font-weight: 500;

    .footer-nav-iconLink {
      display: flex;
      align-items: center;
      transition: opacity 0.2s ease;

      svg {
        max-height: 2.5rem;
        width: auto;
      }
    }

    &:hover {
      .footer-nav-iconLink {
        opacity: 0.7;
      }

      .footer-nav-textLink:after {
        right: 0;
      }
      .footer-nav-linkTag {
        background-color: ${({ theme }) => theme.colors.primaryGreen};
      }
    }
  }

  .footer-nav-textLink {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.white};
      bottom: 0;
      height: 1px;
      left: 0;
      right: 100%;
      transition: right 0.4s ease;
    }
  }

  .footer-nav-linkTag {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 0.2rem 0.8rem;
    border-radius: 0.3rem;
    font-weight: 500;
    line-height: 1.1rem;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.footerBackgroundColor};
    transition: background-color 0.4s ease-in;
  }

  @media ${({ theme }) => theme.device.mdUp} {
    .footer-nav-link {
      font-size: ${({ theme }) => theme.fontSizes.tablet.medium};
    }

    .footer-nav-linkTag {
      margin-left: 1.8rem;
    }
  }
`;

export default NavLink;
