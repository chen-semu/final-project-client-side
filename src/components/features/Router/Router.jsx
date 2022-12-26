import "./Router.css";
import {Route, Routes} from "react-router-dom"
import Home from '../../pages/Home/Home'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import LogIn from "../../pages/LogIn/LogIn.jsx";
import SignUp from "../../pages/SignUp/SignUp.jsx";
import Products from "../../pages/Products"
import Packages from "../../pages/Packages"
import AdminPage from "../../pages/AdminPage"
import Bidding from "../../pages/Bidding"
import Profile from "../../pages/Profile"


function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/admin-page' element={<AdminPage/>}/>
        <Route path='/bidding' element={<Bidding/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/Sign-Up' element={<SignUp/>}/>
      </Routes>
  );
};

export default Router;