import { Link } from "react-router-dom";

function ProductItem(props) {
  const { products } = props;
  return (
    <Link to={"/products/" + products.id}>
      <ul className="ProductItem">
        <li>상품명: {products.name}</li>
        <li>설명: {products.body.slice(0, 80)}</li>
      </ul>
    </Link>
  );
}

export default ProductItem;
