import styled from 'styled-components';

import { SearchForPropertyFormStyleProps } from './SearchForPropertyForm.types';

export const SearchForPropertyFormContainer = styled.span<SearchForPropertyFormStyleProps>`
  color: ${({ theme }) => theme.colors.font.default};
`;
