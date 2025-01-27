import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Shopping from "./Components/Shopping";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashborad";
import { StoreProvider } from "./store/GroceryStore";
function App() {
  return (
    <StoreProvider>
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Feature />
              <Shopping />
              <Footer />
            </>
          }
        />
        {/* Sign In Page */}
        <Route path="/signin" element={<SignIn />} />
        {/* Sign Up Page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </StoreProvider>
  )
}

export default App