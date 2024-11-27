import React from "react";
import styles from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="logo" />
      <div>
        <p>Paradise Nursery</p>
        <p>Where Green Meet Serenity</p>
      </div>
      <p>Plants</p>
      <div>
        <FiShoppingCart />
      </div>
    </header>
  );
};

export default Header;
