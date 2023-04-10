import React from "react";

import { Route, Routes } from "react-router-dom";

import {Home, Blog, Courses, Events, AboutTWG} from "../pages";


const RouteLink = () => {
    return (
        <Routes>
            <Route path="/courses" element={<Courses/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/events" element={<Events/>}/>
            <Route path="/abouttwg" element={<AboutTWG/>}/>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default RouteLink;
