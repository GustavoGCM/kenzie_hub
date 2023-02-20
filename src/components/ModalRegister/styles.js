import styled from "styled-components";

export const ModalContainer = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    max-width: 370px;
    width: 100%;
  }

  > div > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    font-size: var(--title-3);
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-weight: var(--bold);
    border-radius: var(--radius-default) var(--radius-default) 0 0;
  }

  > div > header > img {
    cursor: pointer;
  }

  > div > form {
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 18px 20px;
    padding-bottom: 32px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border-radius: 0 0 var(--radius-default) var(--radius-default);
  }

  > div > form > label {
    font-size: var(--headline);
  }

  > div > form > select {
    padding: 10.5px 16px;
    font-size: var(--title-2);
    border-radius: var(--radius-default);
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    color: var(--grey-1);
    outline: none;
  }
`;
