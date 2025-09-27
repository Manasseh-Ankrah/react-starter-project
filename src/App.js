import { ToastContainer } from "react-toastify";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import "react-toastify/dist/ReactToastify.css";
import SigninPage from "./pages/SigninPage";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProfileUploadPage from "./pages/ProfileUploadPage";
import ListPage from "./pages/ListPage";
import ListProductsPage from "./pages/ListProductsPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  // const pages = {
  //   admin: <AdminDashboard />,
  //   customer: <CustomerDashboard />,
  // };

  return (
    <>
      <ToastContainer position='top-right' />
      <Routes>
        <Route path='/' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/customer-dashboard' element={<CustomerDashboard />} />
        <Route path='/profile' element={<ProfileUploadPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/list-products' element={<ListProductsPage />} />
        <Route path='/categories' element={<CategoriesPage />} />

        {/* <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        /> */}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// <div className='App'>
//   <ToastContainer position='top-right' />
//   <SignupPage />
//   <SigninPage />
// </div>
export default App;
