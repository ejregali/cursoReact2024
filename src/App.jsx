
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import ShopComp from './components/ShopComp/ShopComp';

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"#SCANDLEXPERIENCE2024"}/>}/>
        <Route path='/shop' element={<ShopComp/>}/>
        <Route path='/nosotros' />
        <Route path='/categorias'/>
      </Routes>
      
      <Footer/>
      
    </>
  );
}

export default App;
