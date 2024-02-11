import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthMiddleware from './middlewares/AuthMiddlewares';
import UserProfile from './pages/UserProfile';
import Shoes from './pages/Shoes';
import ProductView from './pages/ProductView';
import ViewCart from './pages/ViewCart';
import Orders from './pages/Orders';
import CheckoutForm from './pages/Payment';
import SuccessPage from './pages/SuccessPage';
import OrderHistory from './pages/OrdersView';

function App() {
  return (
    <div className='overflow-y-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/signIn' element={<SignIn />} />
          <Route
            path='/'
            element={<Dashboard />}
          />
          <Route
            path='/getUser'
            element={
              <AuthMiddleware>
                <UserProfile />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/shoes/:productType'
            element={
              <AuthMiddleware>
                <Shoes />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/shoe/:productId'
            element={
              <AuthMiddleware>
                <ProductView />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/orders/viewcart'
            element={
              <AuthMiddleware>
                <ViewCart />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/orders/addAddress'
            element={
              <AuthMiddleware>
                <Orders />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/orders/payment'
            element={
              <AuthMiddleware>
                <CheckoutForm />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/order/success'
            element={
              <AuthMiddleware>
                <SuccessPage />
              </AuthMiddleware>
            }
          />
          <Route
            path='/explore/order/orderHistory'
            element={
              <AuthMiddleware>
                <OrderHistory />
              </AuthMiddleware>
            }
          />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
