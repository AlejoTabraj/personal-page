import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({ transition }) {
  return (
    <nav>
      <ul>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'/'}>Yo</Link>
        </li>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'/projects'}>Projectos</Link>
        </li>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'/jo'}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
