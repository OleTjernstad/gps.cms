import styled from "styled-components";

const AsideElem = styled.aside`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background: #f3faff;
`;

export const Aside = () => {
  return <AsideElem />;
};
