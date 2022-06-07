import React from 'react';
import '../Card/Card.css';
import card from '../../Images/card.png';
import mujer from '../../Images/mujer.png';

export const Card = () => {
  return (
    <div className='conteinerCard'>
      <img className='hombre' src={card} alt='hombre usando celular' />
      <div className='comentario'>
        <img className='mujer' src={mujer} alt='Foto de mujer' />
        <div className='nombreyhashtag'>
          <p className='nombre'>Sam Jerremy</p>
          <p className='hashtag'>#dayAtTheBeach</p>
        </div>
      </div>
    </div>
  );
};
