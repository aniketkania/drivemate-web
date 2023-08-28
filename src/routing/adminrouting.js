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

const AdminRouting = () => {
  return (
    <>
      <Route path="/admin/customers" element={<Customer />} />
      <Route path="/admin/drivers" element={<Drivers />} />
      <Route path="/admin/customer/profile" element={<Profile />} />
      <Route path="/admin/driver/profile" element={<Profile />} />
      <Route path="/admin/trips/trip" element={<ViewTrip />} />
      <Route path="/admin/oneuser" element={<Profile />} />
      <Route path="/admin/trips" element={<Trips />} />
    </>
  );
};

export default AdminRouting;
