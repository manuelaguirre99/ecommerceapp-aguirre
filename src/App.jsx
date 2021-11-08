import './App.css';
import NavBar from "./components/NavBar/NavBar"
import CartWidget from './components/NavBar/CartWidget';
import ItemsContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/ItemListContainer/Contador';

function App() {


  return (
    <div className="App">
      <NavBar>
      <CartWidget/>
      </NavBar>

      <ItemsContainer nombre="Boxes"/>
        <Contador></Contador>


    
    
    </div>
  );
}

export default App;
