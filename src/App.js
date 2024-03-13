import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
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
import OtpVerification from './Components/Pages/Auth/OtpVerification';
import NainaDevi from './Components/Pages/Mandir/North Mandir/NainaDevi';
import MansaDevi from './Components/Pages/Mandir/North Mandir/MataMansaDevi';
import VaishnoDevi from './Components/Pages/Mandir/North Mandir/VaishnoDevi';
import BajreshwariDevi from './Components/Pages/Mandir/North Mandir/BajreshwariDevi';
import KalkaJi from './Components/Pages/Mandir/North Mandir/KalkaJi';
import JwalaJi from './Components/Pages/Mandir/North Mandir/JwalaJi';
import Mahabodhi from './Components/Pages/Mandir/East Mandir/MahaBodhi';
import Jagannath from './Components/Pages/Mandir/East Mandir/Jagannath';
import Kamakhya from './Components/Pages/Mandir/East Mandir/Kamakhya';
import Lingaraj from './Components/Pages/Mandir/East Mandir/Lingraj';
import Birla from './Components/Pages/Mandir/East Mandir/Birla';
import Dakshineswar from './Components/Pages/Mandir/East Mandir/Dakshineswar';
import Dwarkadhish from './Components/Pages/Mandir/West Mandir/Dwarkadhish';
import Kailash from './Components/Pages/Mandir/West Mandir/Kailash';
import SiddhiVinayak from './Components/Pages/Mandir/West Mandir/Siddhivinayak';
import Mahalaxmi from './Components/Pages/Mandir/West Mandir/Mahalaxmi';
import Shanidev from './Components/Pages/Mandir/West Mandir/ShaniDev';
import Trimbakeshwar from './Components/Pages/Mandir/West Mandir/Trimbakeshwar';
import Virupaksha from './Components/Pages/Mandir/South Mandir/Virupaksha';
import Meenakshi from './Components/Pages/Mandir/South Mandir/Meenakshi';
import Ramanathaswamy from './Components/Pages/Mandir/South Mandir/Ramanathaswamy';
import Airavatesvara from './Components/Pages/Mandir/South Mandir/Airavatesvara';
import Brihadeeswara from './Components/Pages/Mandir/South Mandir/Brihadeeswara';
import Aihole from './Components/Pages/Mandir/South Mandir/Aihole';


function App() {
  return (
    <>
      <Routes>
        {/* Main */}
        <Route path='/' element={<HomePage />} />

        {/* Auth routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/otp-verification' element={<OtpVerification />} />

        {/* Mandir routes */}
        <Route path='/north-mandir' element={<NorthMandir />} />
        <Route path='/south-mandir' element={<SouthMandir />} />
        <Route path='/east-mandir' element={<EastMandir />} />
        <Route path='/west-mandir' element={<WestMandir />} />

        <Route path='/banke-bihari' element={<BankeBihari />} />
        <Route path='/naina-devi' element={<NainaDevi/>} />
        <Route path='/mansa-devi' element={<MansaDevi/>} />
        <Route path='/vaishno-devi' element={<VaishnoDevi/>} />
        <Route path='/bajreshwari-devi' element={<BajreshwariDevi/>} />
        <Route path='/kalkaji' element={<KalkaJi/>} />
        <Route path='/jwalaji' element={<JwalaJi/>} />
        <Route path='/mahabodhi' element={<Mahabodhi/>} />
        <Route path='/jagannath' element={<Jagannath/>} />
        <Route path='/kamakhya' element={<Kamakhya/>} />
        <Route path='/lingaraj' element={<Lingaraj/>} />
        <Route path='/birla' element={<Birla/>} />
        <Route path='/dakshineswar' element={<Dakshineswar/>} />
        <Route path='/dwarkadhish' element={<Dwarkadhish/>} />
        <Route path='/kailash' element={<Kailash/>} />
        <Route path='/siddhivinayak' element={<SiddhiVinayak/>} />
        <Route path='/mahalaxmi' element={<Mahalaxmi/>} />
        <Route path='/shanidev' element={<Shanidev/>} />
        <Route path='/trimbakeshwar' element={<Trimbakeshwar/>} />
        <Route path='/virupaksha' element={<Virupaksha/>} />
        <Route path='/meenakshi' element={<Meenakshi/>} />
        <Route path='/ramanathaswamy' element={<Ramanathaswamy/>} />
        <Route path='/airavatesvara' element={<Airavatesvara/>} />
        <Route path='/brihadeeswara' element={<Brihadeeswara/>} />
        <Route path='/aihole' element={<Aihole/>} />
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
