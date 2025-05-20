import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/single/:type/:id" element={<Single />} />
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Route>
        </Routes>
    );
};

export default App;
