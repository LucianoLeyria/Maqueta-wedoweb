import React from 'react';
import '../Card/Card.css';

export const Card = ({ name, avatar, hashtag, image }) => {
  return (
    <div className='conteinerCard'>
      <img className='hombre' src={image} alt='hombre usando celular' />
      <div className='comentario'>
        <img className='mujer' src={avatar} alt='Foto de mujer' />
        <div className='nombreyhashtag'>
          <p className='nombre'>{name}</p>
          <p className='hashtag'>{hashtag}</p>
        </div>
      </div>
    </div>
  );
};
