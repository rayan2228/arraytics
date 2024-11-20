import { useState, useCallback } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  // Add a new product to the list of products using useCallback 
  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: prevProducts.length + 1 },
    ]);
  }, []);

  return (
    <div>
      <h1>Product Management</h1>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
