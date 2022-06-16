import styled from "styled-components";

const ButtonElem = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #40474c;
  color: #40474c;
  margin: 0 0.25em;
  padding: 0.25em 1em;
  font-size: 1.1rem;

  &:hover {
    background: #ce5a9c;
  }

  &:focus {
    background: #ce5a9c;
  }
`;
interface ButtonProps {
  children: string;
}
export const Button = ({ children }: ButtonProps) => {
  return <ButtonElem>{children}</ButtonElem>;
};
