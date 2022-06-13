import { Button } from "../../components/button";
import styled from "styled-components";

const NavbarElem = styled.nav`
  background-color: #c2bebe;
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
