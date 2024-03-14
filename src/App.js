import './App.css';
import Header from './components/Header/';
import Apresentacao from './components/apresentacao';
import CarouselDeImgs from './components/Carrousel/';
import Beneficios from './components/beneficios/';

function App() {
  return (
    <div className="App">
      <Header />
      <Apresentacao />
      <CarouselDeImgs />
      <Beneficios />
    </div>
  );
}

export default App;
