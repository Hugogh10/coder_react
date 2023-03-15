import logo from './logo.svg';
import './App.css';

function App() {
  const productos = ['Remera' , 'Pantalon' , 'Zapatilla']
  const ids = [0, 1 , 2 ]
  return (
    <div className="App">
      <ul>
        {
          ids.map(
            (idProducto) => (
              <li>{productos [idProducto]}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
