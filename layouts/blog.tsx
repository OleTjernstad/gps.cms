import { Aside } from "./blog/aside";
import { Footer } from "./blog/footer";
import { Header } from "./blog/header";
import { Navbar } from "./blog/navbar";
import styled from "styled-components";

const Main = styled.main`
  grid-column: 2 / 3;
  padding: 0.25em;
`;

const PageWrapper = styled.div`
  background-color: #f3faff;
  height: calc(100vh);
  box-shadow: 0 0 3px rgba(black, 0.33);

  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  grid-template-rows: min-content min-content 1fr min-content;
  gap: 1px;

  > * {
    padding: 1rem;
    text-align: center;
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
export const Blog = () => {
  return (
    <PageWrapper>
      <Header />
      <Navbar />
      <Main>Main</Main>
      <Aside />
      <Footer />
    </PageWrapper>
  );
};
