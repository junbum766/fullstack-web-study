import { useState } from "react";

// ver 1
// const Alphabet = () => {
//     const [alphabet, setAlphabet] = useState(['a', 'p', 'p', 'l', 'e']);

//     console.log(alphabet); // ['a', 'p', 'p', 'l', 'e']

//     return (
//       <>
//         <ol>
//           {alphabet.map((value, idx) => (
//             <li key={idx}>{value}</li>
//           ))}
//         </ol>
//       </>
//     );
//   };

// ver 2
// function Alphabet() {
//   const [alphabet, setAlphabet] = useState([
//     { id: 1, alpha: "a" },
//     { id: 2, alpha: "p" },
//     { id: 3, alpha: "p" },
//     { id: 4, alpha: "l" },
//     { id: 5, alpha: "e" },
//   ]);
//   const [inputAlpha, setInputAlpha] = useState("");
//   const addAlpha = () => {
//     const trimedInput = inputAlpha.trim();
//     if (trimedInput === "") return;

//     const newAlphabet = alphabet.concat({
//       id: alphabet.length + 1,
//       alpha: inputAlpha,
//     });
//     console.log(newAlphabet);
//     setAlphabet(newAlphabet);
//     setInputAlpha("");
//   };

//   const enter = (e) => {
//     if (e.key == "Enter") {
//       addAlpha();
//     }
//   };
//   const deleteAlpha = (id) => {
//     const newAlphabet = alphabet.filter((alpha) => {
//       return alpha.id != id;
//     });
//     setAlphabet(newAlphabet);
//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={inputAlpha}
//         onKeyDown={enter}
//         onChange={(e) => setInputAlpha(e.target.value)}
//       />
//       <button onClick={addAlpha}>추가</button>

//       <ol>
//         {alphabet.map((el) => {
//           return (
//             <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
//               {el.alpha}
//             </li>
//           );
//         })}
//       </ol>
//     </>
//   );
// }

// practice 1
// function Alphabet() {
//   const [alphabet, setAlphabet] = useState([
//     { id: "코디", email: "codi@gmail.com" },
//     { id: "윤소희", email: "gg@gmail.com" },
//   ]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const addAlpha = () => {
//     const trimedName = name.trim();
//     const trimedEmail = email.trim();
//     if (trimedName === "" || trimedEmail == "") return;

//     const newAlphabet = alphabet.concat({
//       id: name,
//       email: email,
//     });
//     setAlphabet(newAlphabet);
//     setName("");
//     setEmail("");
//   };
//   const deleteAlpha = (id) => {
//     const newAlphabet = alphabet.filter((alpha) => {
//       return alpha.id != id;
//     });
//     setAlphabet(newAlphabet);
//   };
//   const enter = (e) => {
//     if (e.key == "Enter") {
//       addAlpha();
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="이름"
//         autoFocus
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="이메일"
//         onKeyDown={enter}
//       />
//       <button onClick={addAlpha}>등록</button>

//       <ul>
//         {alphabet.map((el) => {
//           return (
//             <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
//               {el.id}: {el.email}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// practice 2
function Alphabet() {
  const [alphabet, setAlphabet] = useState([
    { id: 1, title: "나는 나다", name: "코디" },
    { id: 2, title: "히히히", name: "윤소희" },
  ]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [optionValue, setOptionValue] = useState("all");

  const addAlpha = () => {
    const trimedName = name.trim();
    const trimedTitle = title.trim();
    if (trimedName === "" || trimedTitle == "") return;

    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      title: title,
      name: name,
    });
    setAlphabet(newAlphabet);
    setName("");
    setTitle("");
  };
  const searchTitle = () => {
    const newSearchList = alphabet.filter((el) => {
      const elTitle = el.title;
      if (elTitle.includes(search) && ( optionValue =='all' || el.name == optionValue)) {
        return el;
      }
    });
    console.log(newSearchList);
    setSearchList(newSearchList);
    setSearch("");
  };
  const selectOption = () => {
    const setOption = document.querySelector("#selectName").value;
    setOptionValue(setOption);
  };

  const enter = (e) => {
    if (e.key == "Enter") {
      addAlpha();
    }
  };
  const enterSearch = (e) => {
    if (e.key == "Enter") {
      searchTitle();
    }
  };

  return (
    <>
      <div className="submitBox">
        <label htmlFor="name">작성자: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="작성자"
          autoFocus
        />
        <label htmlFor="title">제목: </label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          onKeyDown={enter}
        />
        <button onClick={addAlpha}>작성</button>
      </div>
      <div className="searchBox">
        <select name="selectName" id="selectName" onChange={selectOption}>
          <option value="all">all</option>
          {alphabet.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색어"
          onKeyDown={enterSearch}
        />
        <button onClick={searchTitle}>검색</button>
      </div>
      <div className="resultBox">
        <h3>목록</h3>
        <table border={"1"}>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          {alphabet.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="searchResultBox">
        <h3>검색 결과</h3>
        <table border={"1"}>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          {searchList.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.name}</td>
              </tr>
            );
          })}
        </table>
        {searchList.length == 0 ? <p>검색 결과가 없습니다.</p> : ""}
      </div>
    </>
  );
}

export default Alphabet;
