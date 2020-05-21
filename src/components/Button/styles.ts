import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.button`
  background: ${colors.EmperorYellow};
  height: 60px;
  border: 0;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  color: #fff;
  margin-top: 16px;

  &:hover {
    background: ${shade(0.1, `${colors.EmperorYellow}`)};
  }
`;
