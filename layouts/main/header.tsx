import Image from "next/image";
import Logo from "../../public/logo.png";
import styled from "styled-components";

const HeaderElem = styled.header`
  background: linear-gradient(
    115deg,
    rgba(243, 230, 251, 1) 11%,
    rgba(182, 148, 233, 1) 100%
  );
  grid-column: 1 / -1;
  top: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LogoBlock = styled.div`
  margin: 10px;
  position: relative;
  width: 90px;
  height: 90px;
`;

const TitleBlock = styled.div`
  padding-left: 10px;
`;

const Title = styled.h1`
  font-weight: 900;
`;

export const Header = () => {
  return (
    <HeaderElem>
      <HeaderContainer>
        <LogoBlock>
          <Image layout="fill" src={Logo} alt="logo" />
        </LogoBlock>
        <TitleBlock>
          <Title>Glaamadalens Plastikbeholderes Søgeforæning</Title>
        </TitleBlock>
      </HeaderContainer>
    </HeaderElem>
  );
};
