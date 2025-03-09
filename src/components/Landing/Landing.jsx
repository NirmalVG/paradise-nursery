import React from "react"
import styles from "./Landing.module.css"
import { NavLink } from "react-router"

const Landing = () => {
  return (
    <section className={styles.outer}>
      <div>
        <h1 className={styles.head}>Welcome To Paradise Nursery</h1>
        <div className={styles.outline}></div>
        <p className={styles.subhead}>Where Green Meet Serenity</p>

        <NavLink to="/product-listing">
          <button className={styles.started_btn}>Get Started</button>
        </NavLink>
      </div>
      <div>
        <p className={styles.head_text}>
          Welcome to Paradise Nursery, where green meets serenity!
        </p>
        <p className={styles.content}>
          At Paradise Nursery, we are passionate about bringing nature closer to
          you. Our mission is to provide a wide range of high-quality plants
          that not only enhance the beauty of your surroundings but also
          contribute to a healthier and more sustainable lifestyle. From air-
          purifying plants to aromatic fragrant ones, we have something for
          every plant enthusiast. Our team of experts is dedicated to ensuring
          that each plant meets our strict standards of quality and care.
          Whether you're a seasoned gardener or just starting your green
          journey, we're here to support you every step of the way. Feel free to
          explore our collection, ask questions, and let us help you find the
          perfect plant for your home or office. Join us in our mission to
          create a greener, healthier world. Visit Paradise Nursery today and
          experience the beauty of nature right at your doorstep.
        </p>
      </div>
    </section>
  )
}

export default Landing
