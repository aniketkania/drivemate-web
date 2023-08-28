import React from "react";
import Login from "../Containers/Login";
import Signup from "../Containers/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { checkAuthentication, getProfile } from "../helper/auth";
import CustomerRouting from "./customerrouting";
import DriverRouting from "./driverrouting";
import AdminRouting from "./adminrouting";
import LoginError from "../Containers/Error/FailLogin";
import CustomerHeader from "../Containers/Header/customer";
import DriverHeader from "../Containers/Header/driver";
import AdminHeader from "../Containers/Header/admin";

function Routing() {
    const isAuthenticated = checkAuthentication();
    const profile = getProfile();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login} />
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={Signup} />
                {isAuthenticated ? (
                    <>
                        {profile.Role === "C" && (
                            <>
                                <CustomerHeader />
                                <CustomerRouting />
                            </>
                        )}

                        {profile.Role === "D" &&
                            <>
                                <DriverHeader />
                                <DriverRouting />
                            </>
                        }

                        {profile.Role === "A" &&
                            <>
                                <AdminHeader />
                                <AdminRouting />
                            </>
                        }
                    </>
                ) : (
                    <LoginError />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
