import ProductItem from "../components/ProductItem";

function ProductPage(props) {
  console.log(props);
  const { products } = props;
  return (
    <main className="ProductPage">
      <h1>여기는 상품 목록 페이지!</h1>
      <div>
        {products.map((product) => {
          return <ProductItem key={product.id} products={product} />;
        })}
      </div>
    </main>
  );
}

export default ProductPage;
