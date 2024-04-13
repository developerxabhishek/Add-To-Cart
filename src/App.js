import "./App.css"
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CheckOut from "./pages/CheckOut";
const App = () => {
  return (
  <>
  <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/Homepage" element={<HomePage/>}/>
       <Route path="/Menu" element={<MenuPage/>}/>
       <Route path="/Checkout" element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App
