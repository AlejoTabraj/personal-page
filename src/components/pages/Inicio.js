import React, { useState } from 'react';
import Loading from './Loading';
import Transition from '../organisms/Transition';

export default function Inicio({setDisplay}) {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <>
          <Transition setDisplay={setDisplay}/>
        </>
      ) : (
        <Loading setShowContent={setShowContent} />
      )}
    </div>
  );
}