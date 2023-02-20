import styled from "styled-components";

export const Input = styled.input`
  padding: 10.5px 16px;
  font-size: var(--title-2);
  border-radius: var(--radius-default);
  background-color: var(--grey-2);
  border: 1px solid var(--grey-2);
  color: var(--grey-1);
  outline: none;

  :focus {
    background-color: var(--grey-2);
    color: var(--grey-0);
    border: 1px solid var(--grey-0);
  }
`;

export const ErrorInput = styled.p`
  font-size: var(--headline);
  color: var(--negative);
`;
