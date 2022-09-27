// import logo from './logo.svg';
// import './App.css';
// component
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
// MUI
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
