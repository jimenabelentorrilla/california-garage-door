import './App.css';
import Nav from "./componentes/Nav";
import Header from "./componentes/Header";
import SectionTwo from './componentes/SectionTwo';
import Brands from './componentes/Brands';
import Componente from './componentes/Componente';
import Testimonials from './componentes/Testimonials';
import Work from "./componentes/Work";
function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <SectionTwo />
      <Brands />
      <Componente />
      <Testimonials />
      <Work />
    </div>
  );
}

export default App;
