import styled from 'styled-components';

import { device } from '../../Theme';

export const CollectionContainer = styled.div`
  width: 75%;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(4, auto);
  grid-auto-rows: auto;
  padding: ${({ theme }) => theme.spacing[3]};
  overflow-y: auto;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const NoData = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.errorBg};

  h1 {
    color: ${({ theme }) => theme.colors.crimson};
    background-color: initial;
  }
`;
