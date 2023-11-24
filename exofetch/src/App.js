
import Cocktails from "./page/Cocktails";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cocktails />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
