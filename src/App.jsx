import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import GeneralSignUp from './components/SignUp/GeneralSignUp';
import { RouterProvider } from 'react-router';
import ProductPage from './components/ProductPage/ProductPage';
import SignIn from './components/SignIn/SignIn';
import WishList from './components/WishList/WishList';
import ArchivePage from './components/Archive/Archive';
import PageNotFound from './components/PageNotFound/PageNotFound';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Seller from './components/Seller/Seller';
import SellerSignUp from './components/SellerSignUp/SellerSignUp';
import HomePage from './components/HomePage/HomePage';
import EditProfile from './components/editprofile/EditProfile';
import AddProduct from './components/ProductPage/AddProduct/AddProduct';
// import AddOffer from './components/AddOffer/AddOffer';
import RateReview from './components/RateReview/RateReview';
import ChangePassword from './components/changePassword/ChangePassword';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Admin from './components/Admin/Admin';
import Update from './components/Admin/Update/Update';
import ChangePass from './components/Admin/ChangePass/ChangePass';
// import Navbar from './components/CategoryPage/CategoryNavbar/CategoryNavbar';

function App() {

  const routers = createBrowserRouter([
    {
      path: 'FrontEnd-Areeq/',
      element: <DefaultLayout />,
      children: [
        { path: '/FrontEnd-Areeq/seller/product/:productId', element: <ProductPage /> },
        { path: '/FrontEnd-Areeq/home', element: <HomePage /> },
        { path: '/FrontEnd-Areeq/signin', element: <SignIn /> },
        { path: '/FrontEnd-Areeq/signup', element: <GeneralSignUp /> },
        { path: '/FrontEnd-Areeq/signupseller', element: <SellerSignUp /> },
        { path: '/FrontEnd-Areeq/wishlist', element: <WishList /> },
        { path: '/FrontEnd-Areeq/archive', element: <ArchivePage /> },
        { path: '/FrontEnd-Areeq/product/:productId', element: <ProductPage /> },
        { path: '/FrontEnd-Areeq/seller/:userId', element: <Seller /> },
        { path: '/FrontEnd-Areeq/addProduct', element: <AddProduct /> },
        // { path: '/FrontEnd-Areeq/addOffer', element: <AddOffer /> },
        { path: '/FrontEnd-Areeq/review/:productId', element: <RateReview /> },
        { path: '/FrontEnd-Areeq/editprofile/:userId', element: <EditProfile /> },
        { path: '/FrontEnd-Areeq/category/:categoryName', element: <CategoryPage /> },
        { path: '/FrontEnd-Areeq/changePassword/:userId', element: <ChangePassword /> },
        // { path: '/FrontEnd-Areeq/CategoryNavbar/:categoryName', element: <CategoryNavbar /> },
        { path: '/FrontEnd-Areeq/*', element: <PageNotFound /> },

      ],
    },
    { path: '/FrontEnd-Areeq/admin', element: <Admin /> },
    { path: '/FrontEnd-Areeq/admin/update/:userId', element: <Update /> },
    { path: '/FrontEnd-Areeq/admin/changePass/:userId', element: <ChangePass/> },
  ]);
  return (
    <RouterProvider router={ routers } />
  );
}
export default App;
