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

const TextWrapper = styled.div`
  padding: 1.1em;
`;

const CardTitle = styled.h2`
  font-size: 1.4rem;
`;

const Excerpt = styled.p``;

const CardFooter = styled.div`
  width: 100%;
  background-color: #abbecc;
  display: flex;
  flex-direction: row;
  border-radius: 0 0 10px 10px;
  padding: 0.35em;
`;

const Tags = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ce5a9c;
  color: #ce5a9c;
  margin: 0 0.25em;
  padding: 0.1em 0.25em;
  font-size: 0.95rem;
`;
interface ArticleCardProps {
  title: string;
  ingress: string;
  tags: string[];
}
export const ArticleCard = ({ ingress, tags, title }: ArticleCardProps) => {
  return (
    <div style={{ padding: "10px" }}>
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
        <TextWrapper>
          <CardTitle>{title}</CardTitle>
          <Excerpt>{ingress}</Excerpt>
        </TextWrapper>
        <CardFooter>
          {tags.map((tag) => (
            <Tags key={tag}>{tag}</Tags>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
};
