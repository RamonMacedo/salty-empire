import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.Inputs};
  height: 60px;
  border: 2px solid ${colors.InputsLine};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  color: ${colors.SecondaryTexts};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.EmperorRed};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.EmperorYellow};
      color: ${colors.EmperorYellow};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.EmperorYellow};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${colors.SecondaryTitles};

    &::placeholder {
      color: ${colors.SecondaryTexts};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.EmperorRed};
    color: #fff;

    &::before {
      border-color: ${colors.EmperorRed} transparent;
    }
  }
`;
