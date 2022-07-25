import logo from './logo.svg';
import './App.css';
import Container from './Container/Container';
import NavBar from './components/NavBar';
import Header from './components/Header/ItemListContainer';
import CartWidget from './components/CartWidget';




function App() {
  return <>
    <NavBar />
    <h2>Titulo</h2>
    <Container />
    <CartWidget />
    
  </>
}

export default App;


// function App() {

//     return (
//       <div className="App">
//         <Header titulo="TITULO" />
//         <Form></Form>
//       </div>

      
//     );
// }

// export default App;
