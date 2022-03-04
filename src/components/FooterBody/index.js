import styled from "styled-components";
import Component from "./FooterBody";

const FooterBody = styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media ${({ theme }) => theme.device.mdUp} {
    padding: 6rem 0 5rem;
    flex-direction: row;
  }
  @media ${({ theme }) => theme.device.lgUp} {
    padding: 14rem 0;
  }
`;

export default FooterBody;
