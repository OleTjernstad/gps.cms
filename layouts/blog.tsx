import { Footer } from "./blog/footer";
import { Header } from "./blog/header";
import { Navbar } from "./blog/navbar";
import styled from "styled-components";

const Main = styled.main`
  min-height: calc(100vh - 250px);
`;
export const Blog = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Main>Main</Main>
      <Footer />
    </>
  );
};
