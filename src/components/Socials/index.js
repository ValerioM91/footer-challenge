import styled from "styled-components";
import Component from "./Socials";

const Socials = styled(Component)`
  margin: 0;
  padding: 0;
  list-style: none;
  width: fit-content;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, min-content);
  column-gap: 3rem;

  a {
    opacity: 0.69;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

export default Socials;
