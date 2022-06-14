import styled from "styled-components";

const Title = styled.h1``;

const ChildrenWrapper = styled.div`
  margin-top: 20px;
`;

interface LandingProps {
  title: string;
  topSection: React.ReactNode;
  children: React.ReactNode;
}
export const Landing = ({ title, topSection, children }: LandingProps) => {
  return (
    <>
      <Title>{title}</Title>
      {topSection}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};
