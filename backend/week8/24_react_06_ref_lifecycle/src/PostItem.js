
const PostItem = (props) => {
  // TODO: 부모 컴포넌트에서 넘겨주는 데이터(props) 구조 분해 할당
  const {id, title, body} = props.post;
  return (
    // TODO: 데이터 채우기
    <div className="PostItem">
      <div className="postHeader">
        <span className="id">No.{id} - </span>
        <span className="title">{title}</span>
      </div>
      <p className="body">{body.slice(0,100)} ... </p>
    </div>
  );
};

export default PostItem;
