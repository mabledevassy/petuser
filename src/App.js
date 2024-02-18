import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/dogs' element={<ShopCategory banner={dog_manner}category="dog"/>}/>
        <Route path='/cats' element={<ShopCategory banner={cat_banner}category="cat"/>}/>
        <Route path='/fishes' element={<ShopCategory banner={fish_banner}category="fish"/>}/>
        <Route path='/birds' element={<ShopCategory  banner={bird_banner}category="bird"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       
        </Routes>
       <Footer/>
       
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
