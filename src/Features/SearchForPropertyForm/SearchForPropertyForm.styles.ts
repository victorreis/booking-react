import styled from 'styled-components';

import { Button } from '../../Components/Button';
import { iconSizes } from '../../Theme/Types';

export const StyledSearchForPropertyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SearchForPropertyRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0 0;
`;

export const SearchForPropertyButton = styled(Button)`
  margin-left: calc(${iconSizes.md} + 0.3rem);
`;
