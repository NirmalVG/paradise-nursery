import React from "react"
import styles from "./Cart.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../features/cart/CartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  // Calculate the total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId))
  }

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId))
  }

  return (
    <section className={styles.cart_container}>
      <h1>Total Cart Amount: &#8377;{totalAmount.toFixed(2)}</h1>
      {cartItems.map((item) => {
        const itemTotal = item.price * item.quantity
        return (
          <div className={styles.item_container} key={item.id}>
            <div>
              <div className={styles.image_container}>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
            <div className={styles.product_details}>
              <div>
                <h2 className={styles.title}>{item.name}</h2>
                <p>Price: &#8377;{item.price}</p>
                <div className={styles.quantity_container}>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                  <p>&nbsp;{item.quantity}&nbsp;</p>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                </div>
                <p>
                  <strong>Total: &#8377;{itemTotal.toFixed(2)}</strong>
                </p>
                <button
                  className={styles.dlt_btn}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      })}
      {cartItems.length > 0 && (
        <button className={styles.clear_btn} onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
    </section>
  )
}

export default Cart
