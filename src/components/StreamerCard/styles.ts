import styled from 'styled-components';

const StreamerCardStyled = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.colors.main};
  box-shadow: ${(p) => p.theme.neuphorm.boxShadow};
  border-radius: ${(p) => p.theme.neuphorm.borderRadius};
  & + li {
    margin-top: 1.5rem;
  }
  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default StreamerCardStyled;
