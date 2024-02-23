import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardComponent from "./components/CardComponent";
import {Col, Row} from "react-bootstrap";
import SelectPage from "./pages/SelectPage";
import MaterialsPage from "./pages/MaterialsPage";
import TestPage from "./pages/TestPage";

function App() {
  return (

    <div className="Main">
      
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/select" element={<SelectPage />} />
                <Route path="/materials" element={<MaterialsPage />} />
                <Route path="/test" element={< TestPage/>} />
                {/* Other routes */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
