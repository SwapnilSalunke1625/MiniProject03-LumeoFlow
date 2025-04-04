import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminSignUp from "./Pages/AdminSignUp"
import Login from "./Pages/Adminsignin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<AdminSignUp />} />
      </Routes>
    </Router>
  )
}

export default App