import React from "react";
import ParentsRoute from "./Routes/ParentsRoute";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ParentsRoute />} />
      </Routes>
    </>
  );
}

export default App;
