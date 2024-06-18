import { createGlobalStyle } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const theme = {
  colors: {
    cardBgColor: '#18181B',
    defaultColor: '#fff',
    boxShadow1: 'rgba(0, 0, 0, 0.05)',
    boxShadow2: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    errorBg: 'rgba(255, 255, 255, 0.75)',
    hoverShadow1: 'rgba(0, 0, 0, 0.04)',
    hoverShadow2: 'rgba(0, 0, 0, 0.3)',
    borderHoverColor: 'rgba(255, 255, 255, 0.2)',
    crimson: 'crimson',
    primary: 'rgb(0, 0, 235)',
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    15: '60px',
    16: '64px',
    20: '80px',
    32: '120px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: ${({ theme }) => theme.colors.cardBgColor};
    color: ${({ theme }) => theme.colors.defaultColor};
  }
`;
