import './App.css';
import Nav from "./componentes/Nav";
import Header from "./componentes/Header";
import SectionTwo from './componentes/SectionTwo';
import Brands from './componentes/Brands';
import Componente from './componentes/Componente';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <SectionTwo />
      <Brands />
      <Componente />
    </div>
  );
}

export default App;
