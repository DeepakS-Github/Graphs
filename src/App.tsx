// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <Router>
        <Box padding={"44px"} bgGradient='linear(to-b, #252120, #000000)' width={"100vw"} minHeight={"100vh"}>
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;
