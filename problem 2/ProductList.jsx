import { memo } from "react";

const ProductList = memo(({ products }) => {
  console.log("ProductList rendered"); // check if this component is re-rendered
  return (
    <ul>
      {products.map(({ id, name, price }) => (
        <li key={id}>
          {name} - ${price}
        </li>
      ))}
    </ul>
  );
});

export default ProductList;
