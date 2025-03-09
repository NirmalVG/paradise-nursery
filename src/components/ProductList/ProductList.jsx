import React from "react"
import styles from "./ProductList.module.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addItemToCart } from "../features/cart/CartSlice"

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Areca Palm",
      price: 699,
      description: "Removes toxins, needs bright indirect light.",
      image: "/images/areka_palm.jpg",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 499,
      description: "Hardy, filters toxins, survives in low light.",
      image: "/images/snake_plant.jpg",
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 599,
      description: "Absorbs mold spores, thrives in low light.",
      image: "/images/peace_lily.jpg",
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 399,
      description: "Easy to maintain, removes carbon monoxide.",
      image: "/images/spider_plant.jpg",
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 349,
      description: "Air-purifying & medicinal, needs sunlight.",
      image: "/images/aloe_vera.jpg",
    },
    {
      id: 6,
      name: "Rubber Plant",
      price: 799,
      description: "Absorbs toxins, prefers indirect light.",
      image: "/images/rubber_plant.jpg",
    },
  ]

  const dispatch = useDispatch()
  const [disabledProducts, setDisabledProducts] = useState([])

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product))
    setDisabledProducts([...disabledProducts, product.id])
  }

  return (
    <section className={styles.outer}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Air Purifying Plants</h1>
      </div>
      <div className={styles.product_container}>
        {products.map((product) => {
          return (
            <div className={styles.product_card} key={product.id}>
              <h3 className={styles.product_title}>{product.name}</h3>
              <div className={styles.image_container}>
                <img src={product.image} alt={product.name} />
              </div>
              <p className={styles.product_amount}>&#8377;{product.price}</p>
              <p className={styles.product_description}>
                {product.description}
              </p>
              <button
                className={`${styles.add_to_cart}${
                  disabledProducts.includes(product.id) ? styles.disabled : ""
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={disabledProducts.includes(product.id)}
              >
                Add to Cart
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductList
