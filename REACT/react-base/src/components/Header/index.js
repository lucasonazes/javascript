import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const clickedButton = useSelector((state) => state.example.clickedButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/test">
        <FaSignInAlt size={24} />
      </Link>
      {clickedButton ? 'Clicked' : 'Not Clicked'}
    </Nav>
  );
}
