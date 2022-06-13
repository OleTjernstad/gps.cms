import styled from "styled-components";

const ButtonElem = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.25em 0.25em;
  padding: 0.25em 1em;
  font-size: 1.1rem;

  &:hover {
    filter: brightness(60%);
  }
`;
interface ButtonProps {
  children: string;
}
export const Button = ({ children }: ButtonProps) => {
  return <ButtonElem>{children}</ButtonElem>;
};
