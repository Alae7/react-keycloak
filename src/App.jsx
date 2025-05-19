import './App.css'
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>}/>

              <Route path="/users" element={<ProtectedRoute><AllUsers /></ProtectedRoute>}
              />
          </Routes>
      </BrowserRouter>
  )
}

export default App
