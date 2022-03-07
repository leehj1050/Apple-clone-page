import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Home from "components/Home";
import Iphone from "components/Iphone";
import Ipad from "components/Ipad";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
      </Routes>
    </>
  );
}
export default App;
