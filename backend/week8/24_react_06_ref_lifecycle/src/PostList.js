import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./PostList.scss";

const PostList = () => {
  // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
  // 초기 값은 빈 배열
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data.slice(0, 30));
  };

  useEffect(() => {
    // 1. axios로 서버에 get 요청 날리는 함수 정의
    // getData(dataURL).then((data) => {
    //   let newData = data.slice(0, 20);
    //   fakePosts = [...newData];
    //   console.log(fakePosts.length);
    // });
    // setPosts(fakePosts);
    getPosts();

    // 2. 함수 실행

    console.log("hi");
  }, []);

  const dataLoading = () => {
    return <p>loading...</p>;
  };
  const dataLoaded = () => {
    return posts.map((post) => <PostItem key={post.id} post={post} />);
  };

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
      {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
      {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
      {posts.length === 0 ? dataLoading() : dataLoaded()}
    </div>
  );
};

export default PostList;
