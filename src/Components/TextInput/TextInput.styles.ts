import styled from 'styled-components';

import { iconSizes } from '../../Theme/Types';
import { toPx } from '../../Utils/Transform/toPx.util';
import { Typography } from '../Typography';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled(Typography)`
  margin: 0.5rem 0.5rem 0 calc(${iconSizes.md} + 0.5rem);
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 0.5rem;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.main.effect.normal}55;
  border-style: solid;
  ${({ theme }) => theme.typographies.body1};
  background-color: ${({ theme }) => theme.colors.background.default.lightest};
  border-radius: ${({ theme }) => toPx(theme.borders.radius.LG)};
  box-sizing: border-box;
  padding: 0.5rem;
`;
