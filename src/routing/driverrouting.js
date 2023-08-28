import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DriverHome from "../Containers/Driver/home";

const DriverRouting = () => {
  return (
    <>
      <Route path="/driver/" element={<DriverHome />} />
    </>
  );
};

export default DriverRouting;
