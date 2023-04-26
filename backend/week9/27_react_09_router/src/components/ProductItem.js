function ProductItem(props) {
  const { products } = props;
  console.log(props);
  return (
    <ul>
      <li>상품명: {products.name}</li>
      <li>설명: {products.body.slice(0, 80)}</li>
    </ul>
  );
}

export default ProductItem;
