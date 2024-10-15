import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PreviewPage from "./pages/PreviewPage";

import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
