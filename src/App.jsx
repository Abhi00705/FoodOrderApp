
import './index.css';
import {createBrowserRouter, Outlet} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Body from './Components/Body.jsx';
import Footer from './Components/Footer.jsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Store/store.js';

  const App = ()=> {
   
  return (
    <Provider store={store}>

    <Header/>{/* Header */}
    <Outlet/>{/* Body and more component is here.*/}
    <Footer/> {/* Footer */}
      
    </Provider>
  )
}

export default App
