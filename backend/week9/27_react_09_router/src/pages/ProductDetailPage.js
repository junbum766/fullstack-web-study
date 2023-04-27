import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = (props) => {
  const { products } = props;

  const { productId } = useParams();
  console.log(productId);

  const navigate = useNavigate();

  const targetProduct = products.filter((el) => {
    return el.id == productId;
  });
  if (!targetProduct[0]) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
  }

  return (
    <main className="ProductDetailPage">
      <div className="detail">
        <h1>{targetProduct[0].id}번째 상품</h1>
        <div className="btn">
          <button onClick={() => navigate(-1)}>목록보기</button>
          <button onClick={() => navigate("/")}>홈으로 이동</button>
        </div>
        <h3>설명 :</h3>
        <div>{targetProduct[0].body}</div>
        <img
          src={process.env.PUBLIC_URL + `/img/${targetProduct[0].id}.jpeg`}
          alt={`img${targetProduct[0].id}`}
        />
      </div>
    </main>
  );
};

export default ProductDetailPage;
