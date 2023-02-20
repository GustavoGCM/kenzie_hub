import styled from "styled-components";

export const TechsContainer = styled.main`
  border-top: 1px solid var(--grey-2);
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-top: 14px;

  > div {
    display: flex;
    max-width: 780px;
    justify-content: space-between;
    margin: 0 4%;
    align-items: center;
  }

  > div > h1 {
    font-size: var(--title-2);
    color: var(--grey-0);
  }

  > div > img {
    padding: 11px;
    background-color: var(--grey-3);
    border-radius: var(--radius-default);
    cursor: pointer;
  }

  > div > img:hover {
    background-color: var(--grey-1);
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 780px;
    margin: 0 4%;
    border-radius: var(--radius-default);
    min-height: 300px;
    background-color: var(--grey-3);
    padding: 23px 4%;
  }

  > ul > li {
    margin: 0 22px;
    padding: 14px 22px;
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-4);
    border-radius: var(--radius-default);
    cursor: pointer;
  }

  > ul > li:hover {
    background-color: var(--grey-2);
  }

  > ul > li > h2 {
    color: var(--grey-0);
    font-size: var(--title-3);
    font-weight: var(--bold);
  }

  > ul > li > p {
    color: var(--grey-1);
    font-size: var(--headline);
    font-weight: var(--regular);
  }

  > ul > h1 {
    font-size: var(--title-1);
    color: var(--grey-1);
    font-weight: var(--bold);
    margin: auto;
    text-align: center;
  }

  @media (min-width: 678px) {
    > div {
      margin: 0 auto;
      width: 100%;
    }
    > ul {
      margin: 0 auto;
      padding: 23px 0;
      width: 100%;
    }
  }
`;
