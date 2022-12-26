import './App.css';
import Router from "./components/features/Router";
import Header from './components/features/Header/Header';
import Footer from './components/features/Footer/Footer'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
// import DataProvider from './contexts/DataContext';
// import { useSelector, useDispatch } from 'react-redux';
// import {in}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> 
        {/* <p>{user}</p> */}
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;