import styled, { keyframes, css } from 'styled-components';

const streamerCardClass = '.streamer-card';

const blink = keyframes`
  to { opacity: 0.3; }
`;

const blinkAnim = css`
  animation: ${blink} 0.4s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
`;

const StreamerCardStyled = styled.div<{ $loading?: boolean }>`
  ${(p) => (p.$loading ? blinkAnim : 'animation: initial')};

  &${streamerCardClass} {
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.text};
    border: 1px solid ${(p) => p.theme.neuphorm.borderColor};
    justify-content: ${(p) => (p.$loading ? 'center' : 'flex-start')};
    background-color: ${(p) => p.theme.colors.main};
    box-shadow: ${(p) => p.theme.neuphorm.boxShadow};
    border-radius: ${(p) => p.theme.neuphorm.borderRadius};

    & + li {
      margin-top: 1.5rem;
    }

    ${streamerCardClass}__name {
      font-size: 1rem;
      margin: 0;
      margin-left: 8px;
      line-height: 1;
    }

    ${streamerCardClass}__score {
      flex: 1;
      text-align: right;
      margin-right: 16px;
    }

    ${streamerCardClass}__img {
      display: block;
      width: 60px;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-top-left-radius: ${(p) => p.theme.neuphorm.borderRadius};
      border-bottom-left-radius: ${(p) => p.theme.neuphorm.borderRadius};
    }
  }
`;

export default StreamerCardStyled;
