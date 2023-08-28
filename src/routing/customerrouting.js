import React from "react";
import Customer from "../Containers/Admin/Customer";
import Drivers from "../Containers/Admin/Driver";
import Trips from "../Containers/Admin/Trip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProfile from "../Containers/UpdateProfile";
import CustomerHome from "../Containers/Customer/home";
import DriverHome from "../Containers/Driver/home";
import Profile from "../Containers/profile";
import ViewTrip from "../Containers/viewtrip";
import DriverHeader from "../Containers/Header/driver";
import CustomerHeader from "../Containers/Header/customer";
import AdminHeader from "../Containers/Header/admin";

const CustomerRouting = () => {
  return (
    <>
      <Route path="/customer/" element={<CustomerHome />} />
      <Route path="/customer/trips" element={<Trips />} />
      <Route path="/customer/profile" element={<Profile />} />
      <Route path="/customer/update" element={<UpdateProfile />} />
      <Route path="/customer/update" element={<UpdateProfile />} />
    </>
  );
};

export default CustomerRouting;
