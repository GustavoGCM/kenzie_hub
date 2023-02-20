import styled from "styled-components";

export const RegisterContainer = styled.main`
  padding: 42px 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 80%;
  align-items: center;
  background-color: var(--grey-3);
  border-radius: var(--radius-default);

  > h2 {
    font-size: var(--title-1);
    color: var(--grey-0);
    font-weight: var(--bold);
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--grey-0);
    width: 100%;
  }

  > form > label {
    margin-bottom: -6px;
    font-size: var(--headline);
  }

  > label {
    font-size: var(--headline);
  }

  > p {
    font-size: var(--headline);
    color: var(--grey-1);
  }

  > form > select {
    padding: 10.5px 16px;
    font-size: var(--title-2);
    border-radius: var(--radius-default);
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    color: var(--grey-1);
    outline: none;
  }

  @media (min-width: 678px) {
    width: 370px;
    margin: 0;
  }
`;
