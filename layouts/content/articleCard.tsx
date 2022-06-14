import Image from "next/image";
import Test from "../../public/image/test.jpg";
import styled from "styled-components";

const Card = styled.article`
  border-radius: 10px;
  box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.3);
  background-color: #c1d5e6;
  width: 100%;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100%);
  overflow: hidden;
`;

export const ArticleCard = () => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          style={{ borderRadius: "10px 10px 0 0" }}
          src={Test}
          layout="responsive"
          objectFit="contain"
          alt="test image"
        />
      </ImageWrapper>
      Card
    </Card>
  );
};
