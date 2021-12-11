import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import WrapperLang from '../src/context/WrapperLang';
import App from './App';
   
 ReactDOM.render(
  <WrapperLang>
   <ChakraProvider>
     <ColorModeScript initialColorMode="dark"></ColorModeScript>
   <App />
   </ChakraProvider>
  </WrapperLang>,
  document.getElementById('root')
);
