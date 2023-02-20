import styled from "styled-components";

export const PinkButton = styled.button`
  padding: 10.5px 0;
  background-color: var(--color-primary-negative);
  color: var(--grey-0);
  border: 1px solid var(--color-primary-negative);
  width: 100%;
  font-size: var(--title-2);
  cursor: pointer;
  border-radius: var(--radius-default);

  :hover {
    background-color: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
  }
`;

export const GreyButton = styled.button`
  padding: 10.5px 0;
  background-color: var(--grey-1);
  border: 1px solid var(--grey-1);
  width: 100%;
  color: var(--grey-0);
  font-size: var(--title-2);
  cursor: pointer;
  border-radius: var(--radius-default);

  :hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
  }
`;

export const BlackButton = styled.button`
  padding: 5px 10.5px;
  background-color: var(--grey-3);
  border: 1px solid var(--grey-3);
  color: var(--grey-0);
  font-size: var(--headline);
  cursor: pointer;
  border-radius: var(--radius-default);

  :hover {
    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
  }
`;
