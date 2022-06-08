import React from 'react';
import '../Cards/Cards.css';
import { Card } from '../Card/Card';

export const Cards = ({ data }) => {
  return (
    <div className='allCards'>
      {data.map((d, i) => {
        return (
          <Card
            key={i}
            name={d.name}
            image={d.image}
            avatar={d.avatar}
            hashtag={d.hashtag}
          />
        );
      })}
    </div>
  );
};
