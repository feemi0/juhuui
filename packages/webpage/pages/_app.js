import '../global.css';

import { Button, Box, setup, theme as juhuuiTheme } from 'juhuui';
import React, { useRef, forwardRef } from 'react';

import Footer from '../containers/footer';
import Header from '../containers/header';

import test from '../components/init';

const theme = {
  fonts: { heading: 'Cairo' },
  icons: {
    moon: `<svg fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,
    github: `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path d="m256 0c-140.7 0-256 116.3-256 257 0 139.88 114.25 255 256 255 141.57 0 256-114.95 256-255 0-140.7-115.3-257-256-257zm45 477.5c-14.398 3-29.699 4.5-45 4.5s-30.602-1.5-45-4.5v-70.199c0-16.801 4.5-22.801 10.5-30.902 3.0547-3.4922 4.8984-6.625 18.598-27.297l-23.098-3.6016c-59.402-8.6992-82.801-39.602-92.102-63.602-12-32.098-5.6992-72.301 15.902-97.797 3.3008-3.9023 6-10.504 3.6016-17.402-4.5039-13.801-3.9023-35.699-0.90234-44.102 15.906 2.2734 32.262 13.668 45.902 21.902 6.2852 3.668 9.582 2.6992 12.598 3 10.961-2.2812 28.059-7.8008 54.301-7.8008 16.199 0 33.301 2.3984 50.102 7.1992 3.0039-0.070313 7.832 2.4844 16.199-2.3984 14.258-8.6875 30.059-19.691 45.898-21.902 3 8.4023 3.6016 30.301-0.89844 44.102-2.4023 6.8984 0.29688 13.5 3.6016 17.402 21.598 25.5 27.898 65.699 15.898 97.797-9.3008 24-32.699 54.902-92.102 63.602l-23.098 3.6016c14.16 21.367 15.652 23.93 18.602 27.297 5.9961 8.1016 10.496 14.102 10.496 30.902zm30-8.6992v-61.5c0-17.102-3.6016-28.5-8.4023-36.902 45.602-12.297 78.004-39.301 92.402-78 15.301-40.797 8.4023-89.398-17.102-123 4.5039-20.098 4.5039-52.199-6.2969-67.199-4.8008-6.5977-11.402-10.199-19.801-10.199h-0.30078c-23.262 1.2578-41.57 12.973-61.199 24.898-18-4.8008-36.301-7.1992-54.602-7.1992-18.598 0-37.199 2.6992-53.695 7.1992-20.664-12.461-38.797-23.672-62.703-24.898-7.5 0-14.102 3.6016-18.902 10.199-10.797 15-10.797 47.102-6.2969 67.199-25.504 33.602-32.402 82.5-17.102 123 14.398 38.699 46.801 65.703 92.402 78-3.7227 6.5117-6.668 14.914-7.8281 26.285-9.2109 3.1758-17.199 4.2109-24.629 2.0273-7.8359-2.3164-13.941-7.5469-19.246-16.469-11.914-20.016-32.207-36.355-55.312-34.23l2.6367 29.883c10.699-0.98047 21.348 10.34 26.879 19.672 9.125 15.367 21.418 25.445 36.547 29.914 11.23 3.3086 21.496 3.2305 32.551 0.87109v40.449c-87.301-30.602-151-114-151-211.8 0-124.2 101.8-227 226-227s226 102.8 226 227c0 97.801-63.699 181.2-151 211.8z"/>
  </svg>`
  },
  fontSizes: {
    ...juhuuiTheme.fontSizes,
    lg05: '1.12875rem',
    '5xl05': '3.5rem'
  },
  colors: {
    ...juhuuiTheme.colors,
    juhuui: {
      50: 'var(--c50)',
      100: 'var(--c100)',
      200: 'var(--c200)',
      300: 'var(--c300)',
      900: 'var(--c900)'
    }
  }
};

export const allTheme = { ...juhuuiTheme, ...theme };

// setPragma(React.createElement);
setup(React.createElement, { theme, forwardRef });

const B = Box.with({
  color: 'green'
});

function Init() {
  this.forwardRef = null;
  this.forward = () => {
    return this.forwardRef;
  };
}
Init.prototype.setup = function (forwardRef) {
  this.forwardRef = forwardRef;
};

export const init = new Init();
init.setup('yo');

const huhu = new test();

export default function MyApp({ Component, pageProps }) {
  console.log('TESt', huhu);
  return (
    <Box d="flex" direction="column" minHeight="100vh">
      <Header />
      <Box
        flex="1 0 auto"
        className="main"
        w="full"
        d="flex"
        justify="center"
        pt={['20', '16']}
      >
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Box>
  );
}
