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
`;

export default Socials;
