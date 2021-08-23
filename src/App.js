import React, { useState, useEffect } from 'react';
import Inicio from './components/pages/Inicio';
import Main from './components/pages/Main'
import '@fontsource/cormorant-garamond';
import "@fontsource/libre-barcode-39-extended-text"; 
import './style/main.scss';
import Index from './components/Index';

export default function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
  });

  return <div className={'app'}>{display ? <Index /> : <Inicio setDisplay={setDisplay}/>}</div>;
}
