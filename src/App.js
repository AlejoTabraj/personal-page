import React, { useState, useEffect } from 'react';
import Inicio from './components/pages/Inicio';
import Main from './components/pages/Main'
import '@fontsource/cormorant-garamond';
import "@fontsource/libre-barcode-39-extended-text"; 
import './style/main.scss';

export default function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2200);
  });

  return <div className={'app'}>{display ? <Main /> : <Inicio />}</div>;
}
