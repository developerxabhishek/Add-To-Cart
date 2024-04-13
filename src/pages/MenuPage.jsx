import { data } from "../Data/Data"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,decqty } from "../Slices/cartSlice"
import Navbar from "../components/Navbar"
const MenuPage = () => {
  const mySelector=useSelector((state)=>state.cartSlice.cart);
  const dispatch=useDispatch();
  

const addToCarts = async (item) => {
  dispatch(addToCart({
    id: item.id,
    foodname: item.foodname,
    price: item.price,
    img: item.img,
    quantity: 1,
    tprice: item.price,
   
  }));
};
console.log(mySelector)
const decreaseQuantity=(item)=>{
  dispatch(decqty({
    id:item.id
  }))
}


const display= data.map((key)=>{
  return(
      <div className="menu-box">
<img src={key.img} alt={key.alt} />
<h1>{key.foodname}</h1>
<h2>Price : {key.price}</h2>
{
  mySelector.map((keys)=>{
    if(keys.id==key.id){
      return (
        <>
        <h2>Total : {keys.quantity}</h2>
        </>
      )
    }
  })
}
{
  mySelector.map((keys)=>{
    if(keys.id==key.id){
      return (
        <>
        <h2>Cost : {keys.tprice}</h2>
        </>
      )
    }
  })
}
<div>
<button style={{backgroundColor:" #3F51B5", color:"#fff"}} onClick={()=>{addToCarts(key)}}>+</button>
<button onClick={()=>{decreaseQuantity(key)}}>-</button>
</div>
</div>
  )
})








  return (
    <>
    <Navbar/>
    <div className="menu-page">

<div className="menu-container">
{display}
</div>


    </div>
    
    </>
  )
}

export default MenuPage
