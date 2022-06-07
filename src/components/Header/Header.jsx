import React from 'react';
import '../Header/Header.css';
import HeaderLogo from '../../Images/HeaderLogo.png';
import banner from '../../Images/banner.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Header = () => {
  return (
    <div>
      <div className='logoylogin'>
        <img className='headerlogo' src={HeaderLogo} alt='Logo' />
        <button className='buttonmenu'>
          {' '}
          <i class='bi bi-list'></i>
        </button>
        <button className='button'>LOGIN</button>
      </div>
      <div className='bannerytitle'>
        <img className='imagebanner' src={banner} alt='banner' />
        <h1 className='title'>Gallery</h1>
      </div>
    </div>
  );
};
