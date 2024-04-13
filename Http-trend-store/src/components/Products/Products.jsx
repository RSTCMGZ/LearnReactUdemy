import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([])
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fetchProductsHandler = async () => {
    fetch('https://my-pos-application-api.onrender.com/api/products/get-all')
    return response.json()


    const newData = data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        ...item
      }
    })
    setProducts(newData)
  }
}
return (
  <main className="products-wrapper">
    <ul className="products">{productList}</ul>
    <button className="button" onClick={fetchProductsHandler}>Fetch Products</button>
  </main>
);
};

export default Products;
