import React from "react"
import styles from "./Header.module.css"
import { FiShoppingCart } from "react-icons/fi"
import { NavLink } from "react-router"
import { useSelector } from "react-redux"

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <NavLink to="/">
          <img src="/images/logo.png" height={50} width={50} />
        </NavLink>

        <div className={styles.logo_text}>
          <h2>Paradise Nursery</h2>
          <p>Where Green Meet Serenity</p>
        </div>
      </div>
      <div className={styles.title_container}>
        <h2>Plants</h2>
      </div>
      <div className={styles.cart_container}>
        <NavLink to="/cart" className={styles.cart_link}>
          {totalItems > 0 && (
            <span className={styles.cart_count}>{totalItems}</span>
          )}
          <FiShoppingCart size={30} />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
