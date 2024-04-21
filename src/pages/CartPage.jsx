import { useSelector, useDispatch } from "react-redux";
import { addToCart, decqty } from "../Slices/cartSlice";
import { Link } from "react-router-dom";
const CartPage = ({ displayCart }) => {
  const mySelector = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();
  const addToCarts = async (item) => {
    dispatch(
      addToCart({
        id: item.id,
        foodname: item.foodname,
        price: item.price,
        img: item.img,
        quantity: 1,
        tprice: item.price,
      })
    );
  };
  const decreaseQuantity = (item) => {
    console.log(mySelector);
    dispatch(
      decqty({
        id: item.id,
      })
    );
  };
  let grandTotalPrice = 0;
  let GrandTotal = mySelector.map((key) => {
    grandTotalPrice += key.tprice;
  });

  const handleCancel = () => {
    displayCart(false);
  };

  return (
    <>
      <div className="cart-container ">
        <div className="cart-page">
          <div>
            <h1 className="order-summary">Order Summary</h1>
            {mySelector.map((key) => {
              return (
                <div className="cart-page-1">
                  <div className="cart-page-1-1">{key.foodname} </div>
                  <div className="cart-page-1-1">{key.quantity}</div>
                  <div>
                    <button
                      className="in-cart-button"
                      style={{ backgroundColor: "#3F51B5" }}
                      onClick={() => {
                        addToCarts(key);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="in-cart-button"
                      style={{ backgroundColor: "#F50057" }}
                      onClick={() => {
                        decreaseQuantity(key);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="cart-page-1-1" style={{ marginLeft: "20px" }}>
              Total (INR) : {grandTotalPrice}{" "}
            </div>
            <div className="cart-part-1-2">
              <Link to="/Checkout">
                <button
                  className="in-cart-button"
                  style={{ backgroundColor: "#3F51B5" }}
                >
                  SAVE AND CHECKOUT
                </button>
              </Link>
              <button
                className="in-cart-button"
                style={{ backgroundColor: "#fff", color: "#3F51B5" }}
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
