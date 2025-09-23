import { ToastContainer } from "react-toastify";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import "react-toastify/dist/ReactToastify.css";
import SigninPage from "./pages/SigninPage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <ToastContainer position='top-right' />
      <Routes>
        <Route path='/' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

        {/* <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
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
