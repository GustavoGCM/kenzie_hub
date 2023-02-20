import styled from "styled-components";

export const UserHeader = styled.header`
  max-width: 90%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 45px 0;

  > h1 {
    font-size: var(--title-1);
    color: var(--grey-0);
    font-weight: var(--bold);
  }
  > p {
    font-size: var(--title-3);
    color: var(--grey-1);
  }

  @media (min-width: 679px) {
    max-width: 780px;
  }
`;
