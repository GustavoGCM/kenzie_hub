import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 22px;

  > .register {
    padding: 10.5px 0;
    background-color: var(--color-primary-negative);
    color: var(--grey-0);
    border: 1px solid var(--color-primary-negative);
    width: 60%;
    font-size: var(--title-2);
    cursor: pointer;
    border-radius: var(--radius-default);

    :hover {
      background-color: var(--color-primary-focus);
      border: 1px solid var(--color-primary-focus);
    }
  }

  > .remove {
    padding: 10.5px 0;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    width: 40%;
    color: var(--grey-0);
    font-size: var(--title-2);
    cursor: pointer;
    border-radius: var(--radius-default);

    :hover {
      border: 1px solid var(--grey-2);
      background-color: var(--grey-2);
    }
  }
`;
