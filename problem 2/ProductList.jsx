import { memo } from "react";

const ProductList = memo(({ products }) => {
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
