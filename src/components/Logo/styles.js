import styled from "styled-components";

export const LogoContainer = styled.header`
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: var(--bold);
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  width: 100%;
  border-bottom: ${({ border }) => border};

  > div {
    max-width: ${({ width }) => `${width}px`};
    display: flex;
    margin: 0 auto;
    padding: 28px 4%;

    justify-content: space-between;
    margin-top: 20px;
  }

  > h1 {
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 22px;
  }
`;
