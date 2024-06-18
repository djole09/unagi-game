import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    cardBgColor: '#18181B',
    defaultColor: '#fff',
    boxShadow1: 'rgba(0, 0, 0, 0.05)',
    boxShadow2: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    hoverShadow1: 'rgba(0, 0, 0, 0.04)',
    hoverShadow2: 'rgba(0, 0, 0, 0.3)',
    borderHoverColor: 'rgba(255, 255, 255, 0.2)',
  },
  spacing: {
    1: '4px',
    2: '8px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: ${({ theme }) => theme.colors.cardBgColor};
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;
