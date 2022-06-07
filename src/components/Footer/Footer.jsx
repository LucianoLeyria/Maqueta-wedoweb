import React from 'react';
import '../Footer/Footer.css';
import FooterLogo from '../../Images/FooterLogo.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <img className='imagenfooter' src={FooterLogo} alt='Logo de la marca' />
      <p className='copyright'>© All right reserved 2020</p>
    </div>
  );
};
