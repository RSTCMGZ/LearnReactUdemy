import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fetchProductsHandler = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://my-pos-application-api.onrender.com/api/products/get-all')
      if (response.status !== 200) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()

      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          ...item,
        };
      });
      setProducts(newData)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }
  let content = <p>nothing products!</p>
  if (products.length > 0) {
    content = productList
  }
  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }
  return (
    <main className="products-wrapper">
      <ul className="products">{content}</ul>

      <button className="button"
        onClick={fetchProductsHandler}>Fetch Products</button>
    </main>
  );
};

export default Products;
