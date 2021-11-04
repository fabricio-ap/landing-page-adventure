import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Navbar } from "../components";

export default function Index() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
};