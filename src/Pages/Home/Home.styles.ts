import styled from 'styled-components';

import { Button } from '../../Components/Button';
import { iconSizes, screenBreakpointRanges } from '../../Theme/Types';

export const HomeContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const HomeRowContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0 0;
`;

export const HomeSearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  gap: 0.5rem;

  @media ${screenBreakpointRanges.xs} {
    width: 100%;
  }

  @media ${screenBreakpointRanges.sm} {
    width: 100%;
  }

  @media ${screenBreakpointRanges.md} {
    width: 85%;
  }

  @media ${screenBreakpointRanges.lg} {
    width: 60%;
  }

  @media ${screenBreakpointRanges.xl} {
    width: 35%;
  }
`;

export const HomeButton = styled(Button)`
  margin-left: calc(${iconSizes.md} + 0.3rem);
`;
