import styled from "styled-components";
import Component from "./FooterBody";

const FooterBody = styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 0 9.5rem;
  .logo {
    align-self: center;
    margin-bottom: 2rem;
  }
  .navigation {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mdUp} {
    padding: 6rem 0 14rem;
    flex-direction: row;
    .logo {
      align-self: flex-start;
      margin-bottom: 0;
    }
    .navigation {
      width: auto;
    }
  }
  @media ${({ theme }) => theme.device.lgUp} {
    padding: 14rem 0;
  }
`;

export default FooterBody;
