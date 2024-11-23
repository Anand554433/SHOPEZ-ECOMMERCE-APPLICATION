import * as reactRouterDom from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Authentication from './pages/Authentication';

import Cart from './pages/customer/Cart';
import Profile from './pages/customer/Profile';
import CategoryProducts from './pages/customer/CategoryProducts';
import IndividualProduct from './pages/customer/IndividualProduct';

import Admin from './pages/admin/Admin';
import AllProducts from './pages/admin/AllProducts';
import AllUsers from './pages/admin/AllUsers';
import AllOrders from './pages/admin/AllOrders';
import NewProduct from './pages/admin/NewProduct';
import UpdateProduct from './pages/admin/UpdateProduct';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <reactRouterDom.Routes>

        <reactRouterDom.Route path='/auth' element={<Authentication />} />

        <reactRouterDom.Route exact path='' element={<Home />}/>
        <reactRouterDom.Route path='/cart' element={<Cart />} />
        <reactRouterDom.Route path='/product/:id' element={<IndividualProduct />} />
        <reactRouterDom.Route path='/category/:category' element={<CategoryProducts />} />
        <reactRouterDom.Route path='/profile' element={<Profile />} />
        <reactRouterDom.Route path='/auth' element={<Authentication />} />

        <reactRouterDom.Route path='/admin' element={<Admin />} />
        <reactRouterDom.Route path='/all-products' element={<AllProducts />} />
        <reactRouterDom.Route path='/all-users' element={<AllUsers />} />
        <reactRouterDom.Route path='/all-orders' element={<AllOrders />} />
        <reactRouterDom.Route path='/new-product' element={<NewProduct />} />
        <reactRouterDom.Route path='/update-product/:id' element={<UpdateProduct />} />

      </reactRouterDom.Routes>

    </div>
  );
}

export default App;
