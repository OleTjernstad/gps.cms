import { Aside } from "./aside";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import styled from "styled-components";

const Main = styled.main`
  grid-column: 2 / 3;
  padding: 0.25em;
`;

const PageWrapper = styled.div`
  background-color: #f3faff;
  min-height: calc(100vh);
  box-shadow: 0 0 3px rgba(black, 0.33);

  color: #002626;
  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  grid-template-rows: min-content min-content 1fr min-content;
  gap: 1px;

  > * {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`;
interface LayoutProps {
  children?: React.ReactNode;
}
export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Aside />
      <Footer />
    </PageWrapper>
  );
};
