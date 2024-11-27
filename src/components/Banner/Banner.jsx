import styles from "./Banner.module.css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className={styles.outer}>
      <div className={styles.contentBox}>
        <div>
          <h1 className={styles.head}>Welcome to Paradise Nursery</h1>
          <p className={styles.subhead}>Where Green Meets Serenity</p>
          <div className={styles.buttonContainer}>
            <Link to="/products">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <div>
          <p className={styles.sideHead}>Welcome to Paradise Nursery</p>
          <p className={styles.sideText}>
            At Paradise Nursery, we bring nature closer to your home with a
            vibrant collection of premium plants, gardening tools, and décor.
            Whether you’re a seasoned gardener or just starting your green
            journey, our carefully curated selection is designed to inspire and
            elevate your gardening experience. Explore our range of exotic
            plants, eco-friendly products, and expert tips to create a serene
            paradise right in your backyard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
