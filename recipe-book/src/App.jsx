// import { useState } from "react";
import { BrowserRouter as Router } from "react-router"
import { Routes, Route } from "react-router"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    
      <div className="app-layout">
        <Navbar />
        <div className="main-area">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
