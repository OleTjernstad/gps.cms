import { Button } from "../../components/button";
import styled from "styled-components";

const NavbarElem = styled.nav`
  grid-column: 1 / 3;
  background: #c1d5e6;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const Navbar = () => {
  return (
    <NavbarElem>
      <Button>Hjem</Button>
      <Button>Hjem</Button>
      <Button>Hjem</Button>
      <Button>Hjem</Button>
    </NavbarElem>
  );
};
