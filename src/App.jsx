import './App.css';
import NavBar from "./components/NavBar/NavBar"
import CartWidget from './components/NavBar/CartWidget';
import ItemsContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
      <CartWidget/>
      </NavBar>

      <ItemsContainer nombre="Boxes"/>
    </div>
  );
}

export default App;
