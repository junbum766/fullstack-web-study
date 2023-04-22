import PostItem from "./PostItem";
import { useEffect, useState } from "react";
import Axios from "axios";

// 임시 데이터 (backend 서버에서 받아왔다고 가정하는 데이터)
let fakePosts = [];
const dataURL = "https://jsonplaceholder.typicode.com/posts";
const getData = async (url) => {
  let res;
  try {
    res = await Axios.get(url);
  } catch (e) {
    console.log(e);
  }
  return res.data;
};

getData(dataURL).then((data) => {
  let newData = data.slice(0, 20);
  fakePosts = [...newData];
  console.log(fakePosts.length);
});

const PostList = () => {
  // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
  // 초기 값은 빈 배열
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setPosts(fakePosts);
    }, 2000);
  });

  // TODO: 해당 컴포넌트가 "mount" 되었을 때
  // posts state에 fakePosts 데이터를 설정하기
  // 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
      {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
      {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
      {posts.length === 0 ? (
        <p>loading...</p>
      ) : (
        posts.map((data) => (
          <PostItem id={data.id} title={data.title} body={data.body} />
        ))
      )}
    </div>
  );
};

export default PostList;
