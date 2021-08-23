import React, { useState, useEffect } from 'react';

export default function Transition({setDisplay}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      
    }, 20);
    const timerContent = setTimeout(() => {
      setDisplay(true);
      console.log('hola')
      
    }, 520);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerContent);}
  }, []);

  return (
    <div className={`transition-wrapper ${animate ? 't-left' : ''}`}>
      <div className={`transition-top ${animate ? 't-top' : ''}`} />
      <div className={`transition-bottom ${animate ? 't-bottom' : ''}`} />
    </div>
  );
}
