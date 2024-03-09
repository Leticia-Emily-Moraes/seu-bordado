import './App.css';
import Header from './components/Header/';
import Apresentacao from './components/apresentacao';
import CarouselDeImgs from './components/Carrousel/';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentacao />
      <CarouselDeImgs />
    </div>
  );
}

export default App;
