
import Cocktails from "./page/Cocktails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePages";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/" element={<Cocktails />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
