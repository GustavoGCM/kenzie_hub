import styled from "styled-components";

export const LoginContainer = styled.main`
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

  @media (min-width: 678px) {
    width: 370px;
    margin: 0;
  }
`;
