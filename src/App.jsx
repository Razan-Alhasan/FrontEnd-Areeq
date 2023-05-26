<<<<<<< HEAD
import './App.css'
import EditProfile from './components/editprofile/EditProfile'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
// import GeneralSignUp from './components/signUp/GeneralSignUp';
import { RouterProvider } from 'react-router';
import ProductPage from './components/ProductPage/ProductPage';
import SignIn from './components/SignIn/SignIn';
import WishList from './components/WishList/WishList';
import ArchivePage from './components/Archive/Archive';
import PageNotFound from './components/PageNotFound/PageNotFound';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Seller from './components/Seller/Seller';
// import SellerSignUp from './components/SellerSignUp/SellerSignUp';
import HomePage from './components/HomePage/HomePage';

>>>>>>> 08aaf2fe3e1a1d0d164f7c78f253b3da39baf3ad
function App() {
  
  const routers = createBrowserRouter([
    {
      path: 'FrontEnd-Areeq/',
      element: <DefaultLayout />,
      children: [
        { path: '/FrontEnd-Areeq/seller/product/:productId', element: <ProductPage /> },
        { path: '/FrontEnd-Areeq/home', element: <HomePage /> },
        { path: '/FrontEnd-Areeq/signin', element: <SignIn /> },
        // { path: '/FrontEnd-Areeq/signup', element: <GeneralSignUp /> },
        // { path: '/FrontEnd-Areeq/signupseller', element: <SellerSignUp/> },
        { path: '/FrontEnd-Areeq/wishlist', element: <WishList /> },
        { path: '/FrontEnd-Areeq/archive', element: <ArchivePage /> },
        { path: '/FrontEnd-Areeq/product/:productId', element: <ProductPage /> },
        { path: '/FrontEnd-Areeq/seller/:userId', element: <Seller /> },
        { path: '/FrontEnd-Areeq/*', element: <PageNotFound /> },
      ]
    }
  ]);
  return (
<<<<<<< HEAD
    <div className="App">
      <EditProfile/>
    </div>

=======
    <RouterProvider router={ routers}/>
>>>>>>> 08aaf2fe3e1a1d0d164f7c78f253b3da39baf3ad
  )
  
}
export default App;
