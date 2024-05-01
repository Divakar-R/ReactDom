import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Components/Pages/All";
import DataScience from "./Components/Pages/DataScience";
import CyberSecurity from "./Components/Pages/CyberSecurity";
import FullStack from "./Components/Pages/FullStack";
import NoPage from "./Components/Pages/NoPage";
import AI from "./Components/Pages/All";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<AI />} />
            <Route path="ai" element={<AI />} />
            <Route path="data-science" element={<DataScience />} />
            <Route path="full-stack" element={<FullStack />} />
            <Route path="cyber-security" element={<CyberSecurity />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
