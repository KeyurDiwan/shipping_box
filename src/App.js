import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SavedEntries from "./components/SavedEntries";
import ShippingFormContainer from "./pages/ShippingFormContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/form" element={<ShippingFormContainer />} />
          <Route path="/entries" element={<SavedEntries />} />
          <Route path="/" element={<Navigate to="/form" />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
