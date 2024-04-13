import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
<>
<Navbar/>
<div className="welcome">
    Welcome to Food's <br /> Kitchen
    <br /> 
  <Link to="/Menu"> <button className="go-to-menu" >GO TO MENU</button></Link> 
</div>
</>
  )
}
export default HomePage