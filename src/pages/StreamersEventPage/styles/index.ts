import styled from 'styled-components';

const StreamersListPageStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  h1 {
    color: ${(p) => p.theme.colors.text};
  }
  .ranking-list {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      & + li {
        margin-top: 12px;
      }
    }
  }
`;

export default StreamersListPageStyled;
