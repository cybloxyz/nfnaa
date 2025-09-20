import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reason from "./pages/reason";
import Expenses from "./pages/expenses";
import Destination from "./pages/destination";
import Belongs from "./pages/belongs";
import Ticket from "./pages/ticket";
import Passport from "./pages/passport";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reason" element={<Reason />} />
        <Route path="/belongs" element={<Belongs />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </Router>
  );
}
