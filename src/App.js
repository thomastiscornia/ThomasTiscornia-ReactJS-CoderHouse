import logo from './logo.svg';
import './App.css';
import Container from './Container/Container';
import NavBar from './components/NavBar';
import Header from './components/Header/ItemListContainer';
import CartWidget from './components/CartWidget';
import Contador from './components/ItemCount'
import { useEffect } from 'react';




function App() {

  useEffect(() => {
    console.log('App mounted');
  },[Contador]);
  return <>
    <NavBar />
    <h2>Titulo</h2>
    <Container />
    <Contador></Contador>
    
  </>
}

export default App;

