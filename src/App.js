import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import './App.css'
import NorthMandir from './Components/Pages/Mandir/NorthMandir';
import SouthMandir from './Components/Pages/Mandir/SouthMandir';
import EastMandir from './Components/Pages/Mandir/EastMandir';
import WestMandir from './Components/Pages/Mandir/WestMandir';
import BankeBihari from './Components/Pages/Mandir/North Mandir/BankeBihari';
import OurService from './Components/Pages/Services/OurService';
import Shops from './Components/Pages/Shop/Shops';
import Rudraksha from './Components/Pages/Shop/ShopPages/Rudraksha';
import PageNotFound from './Components/Pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        {/* Main */}
        <Route path='/' element={<HomePage />} />

        {/* Auth routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />

        {/* Mandir routes */}
        <Route path='/north-mandir' element={<NorthMandir />} />
        <Route path='/south-mandir' element={<SouthMandir />} />
        <Route path='/east-mandir' element={<EastMandir />} />
        <Route path='/west-mandir' element={<WestMandir />} />

        <Route path='/banke-bihari' element={<BankeBihari />} />

        {/* Services routes */}
        <Route path='/our-services' element={<OurService />} />

        {/* Shops routes */}
        <Route path='/shops' element={<Shops />} />
        
        <Route path='/shops/rudraksha' element={<Rudraksha />} />

        {/* Path not found */}
        <Route path='/*'  element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
