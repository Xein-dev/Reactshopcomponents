import '../styles/App.css';
import '../styles/global.css';

import { BrowserRouter , Routes, Route  } from 'react-router-dom'
import {Layout} from '../containers/Layout.jsx'
import {NewPassword} from '../containers/NewPassword.jsx'
import {RecoveryPassword} from '../containers/RecoveryPassword.jsx'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import Login from '../containers/Login.jsx'
import  CreateAccount from '../containers/CreateAccount.jsx'
import  MyAccount from '../containers/MyAccount.jsx'
import ProductList from '../pages/ProductList';
import MobileMenu from '../containers/MobileMenu';
import MyOrder from '../containers/MyOrder';
import MyOrders from '../containers/MyOrders';
import ProductDetail from '../containers/ProductDetail';
import MyOrderDetail from '../containers/MyOrderDetail';
import useInitialState from  '../hooks/useInitialState'
import AppContext from '../context/AppContext';

function App() {

   const initialState = useInitialState();

  return (

   <AppContext.Provider value={initialState}>


   <BrowserRouter>  
      <Layout >
       <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/create-account" element={<CreateAccount/>} />
          <Route exact path="/my-account" element={<MyAccount/>} />
          <Route exact path="/new-password" element={<NewPassword/>}  />
           <Route exact path="/recovery-password" element= {<RecoveryPassword/>}  />
           <Route exact path="/mobile-menu" element={ <MobileMenu/> } />
           <Route exact path="/my-order" element={ <MyOrder/> } />
           <Route exact path="/my-orders" element={ <MyOrders/> } />
           <Route exact path="/my-order-detail" element={ <MyOrderDetail/> } />
           <Route exact path="/product-detail" element={ <ProductDetail/> } />
           <Route exact path="/product-list" element= { <ProductList/> } />
          <Route path="*" element={<NotFound/>}  />
        </Routes>
     </Layout >
  </BrowserRouter >  
  </AppContext.Provider>

  );
}

export default App;
