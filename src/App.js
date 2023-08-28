import "./App.css";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Header from "./Containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./Containers/Admin/Customer";
import Drivers from "./Containers/Admin/Driver";
import Trips from "./Containers/Admin/Trip";
import UpdateProfile from "./Containers/UpdateProfile";
import CustomerHome from "./Containers/Customer/home";
import DriverHome from "./Containers/Driver/home";
import Profile from "./Containers/profile";
import ViewTrip from "./Containers/viewtrip";
import DriverHeader from "./Containers/Header/driver";
import CustomerHeader from "./Containers/Header/customer";
import AdminHeader from "./Containers/Header/admin";
import LocationButton from "./Containers/Temp";
import LoadingPage from "./Containers/Loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
          
          <Route
            path="/customer/trips"
            element={
              <>
                <CustomerHeader />
                <Trips />
              </>
            }
          />
          <Route
            path="/customer/profile"
            element={
              <>
                <CustomerHeader />
                <Profile />
              </>
            }
          />
          <Route
            path="/customer/update"
            element={
              <>
                <CustomerHeader />
                <UpdateProfile />
              </>
            }
          />
          <Route
            path="/driver/"
            element={
              <>
                <CustomerHeader />
                <DriverHome />
              </>
            }
          />
          <Route
            path="/customer/"
            element={
              <>
                <CustomerHeader />
                <CustomerHome />
              </>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <>
                <AdminHeader />
                <Customer />
              </>
            }
          />
          <Route
            path="/admin/drivers"
            element={
              <>
                <AdminHeader />
                <Drivers />
              </>
            }
          />
          <Route
            path="/admin/trips"
            element={
              <>
                <AdminHeader />
                <Trips />
              </>
            }
          />
          <Route
            path="/admin/customer/profile"
            element={
              <>
                <CustomerHeader />
                <Profile/>
              </>
            }
          />
          <Route
            path="/admin/driver/profile"
            element={
              <>
                <DriverHeader />
                <Profile/>
              </>
            }
          />
          <Route
            path="/admin/trips/trip"
            element={
              <>
                <DriverHeader />
                <ViewTrip/>
              </>
            }
          />
          <Route
            path="/customer/update"
            element={
              <>
                <CustomerHeader />
                <UpdateProfile />
              </>
            }
          />
          <Route
            path="/admin/oneuser"
            element={
              <>
                <CustomerHeader/>
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
