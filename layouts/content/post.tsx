import Image from "next/image";
import Test from "../../public/image/test.jpg";
import styled from "styled-components";

const Title = styled.h1``;

interface LandingProps {
  title: string;
  content: React.ReactNode;
}
export const PostLayout = ({ title, content }: LandingProps) => {
  return (
    <PostWrapper>
      <ImageWrapper>
        <Image
          style={{ borderRadius: "10px 10px 0 0" }}
          src={Test}
          layout="responsive"
          objectFit="contain"
          alt="test image"
        />
        <Caption>An elephant at sunset</Caption>
      </ImageWrapper>

      <Title>{title}</Title>
      {content}
    </PostWrapper>
  );
};

const Caption = styled.figcaption`
  padding: 5px;
  padding-left: 10px;
`;

const ImageWrapper = styled.figure`
  border-radius: 10px;
  background-color: #c1d5e6;
  margin: 0;
`;

const PostWrapper = styled.div``;
