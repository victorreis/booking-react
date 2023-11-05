import styled from 'styled-components';

import { screenBreakpointRanges } from '../../Theme/Types';

export const HomeSearchFormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

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
