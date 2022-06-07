import React from 'react';
import '../SearchBar/SearchBar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const SearchBar = () => {
  return (
    <div className='conteiner'>
      <label className='labelinput' htmlFor='searchbar'>
        Search by #
      </label>
      <div className='inputybutton'>
        <input className='searchinput' type='text' />
        <button className='buttoninput'>
          <i class='bi bi-search'></i>
        </button>
      </div>
    </div>
  );
};
