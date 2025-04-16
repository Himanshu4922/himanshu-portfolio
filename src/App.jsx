import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import {
  ProjectsContext,
  ProjectsContextProvider,
} from "./context/ProjectsContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ProjectsContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ProjectsContextProvider>
    </>
  );
}

export default App;
