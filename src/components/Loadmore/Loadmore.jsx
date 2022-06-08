import React from 'react';
import '../Loadmore/Loadmore.css';

export const Loadmore = ({ viewMore }) => {
  const handleClick = () => {
    viewMore();
  };

  return (
    <div className='buttonloadmore'>
      <button onClick={handleClick} className='loadmore'>
        Load More
      </button>
    </div>
  );
};
