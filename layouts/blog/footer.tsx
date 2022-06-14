import Image from "next/image";
import Logo from "../../public/logo.png";
import styled from "styled-components";

const FooterElem = styled.footer`
  background: linear-gradient(
    115deg,
    rgba(243, 230, 251, 1) 11%,
    rgba(182, 148, 233, 1) 100%
  );
  width: 100%;
  height: 120px;
  padding: 0.25em;
`;

export const Footer = () => {
  return <FooterElem>Footer</FooterElem>;
};
