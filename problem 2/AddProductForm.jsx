import { useState } from "react";
import InputField from "./InputField";

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return; // return if name or price is empty. you can show an error message here

    onAddProduct({ name, price: parseFloat(price) }); // call the onAddProduct function. you can show a success message here
    
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
     <InputField
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
