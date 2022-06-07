import './App.css';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loadmore } from './components/Loadmore/Loadmore';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <Cards />
      <Loadmore />
      <Footer />
    </div>
  );
}

export default App;
