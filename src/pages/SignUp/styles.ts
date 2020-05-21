import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

import signInBackgroundImg from '../../assets/signin-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFomRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 600px;

  animation: ${appearFomRight} 1s;

  form {
    position: relative;
    margin-top: -40px;
    margin-bottom: 40px;
    width: 340px;

    img {
      width: 120px;
    }

    @media (max-width: 500px) {
      img {
        width: 80px;
      }
    }

    h1 {
      margin-top: 24px;
      margin-bottom: 24px;
    }

    a {
      color: ${colors.SecondaryTitles};
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;
      font-size: 14px;
      font-weight: 400;

      display: flex;
      align-items: center;

      &:hover {
        color: ${shade(0.2, `${colors.SecondaryTitles}`)};
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  > a {
    color: ${colors.EmperorYellow};
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, `${colors.EmperorYellow}`)};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
