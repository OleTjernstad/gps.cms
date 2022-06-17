import Image from "next/image";
import Test from "../../public/image/test.jpg";
import styled from "styled-components";

const Title = styled.h1``;

interface LandingProps {
  title: string;
}
export const PostLayout = ({ title }: LandingProps) => {
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
        <figcaption>An elephant at sunset</figcaption>
      </ImageWrapper>

      <Title>{title}</Title>
    </PostWrapper>
  );
};

const ImageWrapper = styled.figure`
  position: relative;
  flex-grow: 1;
  border-radius: 10px;
  background-color: #c1d5e6;
`;

const PostWrapper = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;
