import React from "react";
import Router from "./Router/Router";
// import NavProfile from './components/Dashboard/NavProfile';
import NavProfile from './components/Navbar/NavProfile';

export default function App() {
    return (
        <div>
            {/* <NavProfile/> */}
            <NavProfile/>
            <Router/>
        </div>
    )
}

