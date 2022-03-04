import styled from "styled-components";
import Component from "./BottomFooter";

const BottomFooter = styled(Component)`
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 13px;
  display: grid;
  row-gap: 3rem;

  .socials {
    margin-left: auto;
    margin-right: auto;
  }

  .col-right {
    display: grid;
    row-gap: 1.5rem;
    column-gap: 5rem;
  }

  .baseline-link,
  .legal-text {
    display: block;
    margin: auto;
    width: fit-content;
    color: white;
    opacity: 0.69;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .baseline-link {
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media (min-width: 765px) {
    padding-top: 3.5rem;
    border-top: 1px solid white;
  }

  @media (min-width: 960px) {
    display: flex;
    align-items: center;

    .socials {
      margin-left: 0;
    }

    .col-right {
      display: grid;
      grid-template-columns: repeat(3, max-content);
    }
  }
`;

export default BottomFooter;
