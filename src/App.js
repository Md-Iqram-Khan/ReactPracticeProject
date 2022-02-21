import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Update from "./components/Booking/Update";
import AuthProvider from "./components/context/AuthProvider";
import HomePage from "./components/Home/HomePage/HomePage";
import Login from "./components/Login/Login";
import PrivateOutlet from "./components/Login/PrivateOutlet/PrivateOutlet";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="update" element={<Update />} />

              <Route path="booking/:serviceId" element={<Booking />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
      <div></div>
    </div>
  );
}

export default App;
