import { Route, Routes } from 'react-router-dom';
import './App.css';
//admin
import AdminHeader from './Admin/header/AdminHeader';
import AdminCard from './Admin/header/AdminCard';
import './App.css'
import Home from './Admin/Pages/Home';
import Product from './Admin/Pages/Product';
import About from './Admin/Pages/About';
import Contact from './Admin/Pages/Contact';
//user
import UserHome from './User/Pages/Home';
import UserNavbar from './User/header/UserNavbar';
import UserProduct from './User/Pages/Product';
import UserAbout from './User/Pages/About';

function App() {
  let role = 'user'
  if(role==='admin')
  {
    return (
      <>
       <AdminHeader/>
       <AdminCard/>
       <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Product' exact element={<Product/>}/>
          <Route path='/About' exact element={<About/>}/>
          <Route path='/Contact' exact element={<Contact/>}/>
          <Route/>
       </Routes>
      </>
     );
  }else if(role==='user')
  {
    return( 
    <>
      <UserNavbar/>
      <Routes>
          <Route path='/' element={<UserHome/>}/>
          <Route path='/Product' element={<UserProduct/>}/>
          <Route path='/About' element={<UserAbout/>}/>
          <Route/>
       </Routes>
    </>
    )
  }
  else{
    return <h1>Not found</h1>
  }
}

export default App;