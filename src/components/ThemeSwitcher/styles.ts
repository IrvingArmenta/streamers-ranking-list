import styled from 'styled-components';

const ThemeSwitcherStyled = styled.form`
  color: ${(p) => p.theme.colors.text};
  position: fixed;
  top: 16px;
  right: 16px;

  fieldset {
    display: flex;
    gap: 24px;
  }

  label,
  input {
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default ThemeSwitcherStyled;
