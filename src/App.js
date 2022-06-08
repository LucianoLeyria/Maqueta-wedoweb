import './App.css';
import { useState } from 'react';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loadmore } from './components/Loadmore/Loadmore';
import { SearchBar } from './components/SearchBar/SearchBar';
import card from './Images/card.png';
import mujer from './Images/mujer.png';

function App() {
  const [data, setData] = useState([
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
    {
      name: 'Sam Jerremy',
      image: card,
      avatar: mujer,
      hashtag: '#dayAtTheBeach',
    },
  ]);

  function viewMore() {
    setData([
      ...data,
      {
        name: 'Sam Jerremy',
        image: card,
        avatar: mujer,
        hashtag: '#dayAtTheBeach',
      },
      {
        name: 'Sam Jerremy',
        image: card,
        avatar: mujer,
        hashtag: '#dayAtTheBeach',
      },
      {
        name: 'Sam Jerremy',
        image: card,
        avatar: mujer,
        hashtag: '#dayAtTheBeach',
      },
    ]);
  }

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <Cards data={data} />
      <Loadmore viewMore={viewMore} />
      <Footer />
    </div>
  );
}

export default App;
