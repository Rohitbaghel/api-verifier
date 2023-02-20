import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { AutoVerifierAPIBox } from "./components/AutoVerifierAPIBox";
import View from "./components/ViewPage";
import Navbar from "./components/Navbar";
import VideoModal from "./components/VideoModal";

const App = () => {
  return (
    <Router>
      <Navbar />
      <VideoModal />
      <Routes>
        <Route path="/" element={<AutoVerifierAPIBox />} />
        <Route path="/view" element={<View />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
export default App;
