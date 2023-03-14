import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
