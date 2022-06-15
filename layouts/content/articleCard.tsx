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

export const ArticleCard = () => {
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
          <CardTitle>Kano på glomma</CardTitle>
          <Excerpt>
            Hei allesammen det er vel på tide at jeg også piper litt her. Som
            dere alle har fått med dere så har foreningen fått seg kano til
            utleie. Og nå lurer dere sikkert på åffer han VikingMoh babler
            febrilsk om dette nå som kanosesongen er over……
          </Excerpt>
        </TextWrapper>
        <CardFooter>
          <Tags>Kano</Tags>
          <Tags>Glomma</Tags>
        </CardFooter>
      </Card>
    </div>
  );
};
