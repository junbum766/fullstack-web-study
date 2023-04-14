const express = require("express");
const app = express();
const axios = require('axios');
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  console.log("client connected");
  res.render("chat");
});
// `https://stdict.korean.go.kr/api/search.do?&key=B57FCC9C9D19F96B18E55D7B21F8B434&advanced=y&pos=1&type_search=search&q=${word}`
const apiUrl = "https://stdict.korean.go.kr/api/search.do";

const getAPI = async (word) => {
    const Word = word;

    let queryString = `&key=B57FCC9C9D19F96B18E55D7B21F8B434`;
    queryString = `&req_type=json`;
    queryString += `&advanced=y`;
    queryString += `&type_search=search`;
    queryString += `&q=${Word}`;

    try {
        return await axios.get(`https://stdict.korean.go.kr/api/search.do?${queryString}`);
    } catch (err) {
        console.error("API 요청 중 오류 발생");
        return { success: false };
    };
};

app.get('/api', async (req, res) => {
    const word = req.query;
    getAPI(word)
        .then((response) => {
            const { data: { response: { body: { items: { item } } } } } = response;
            res.json({ success: true, rows: item });
        })
        .catch((err) => {
            console.error(error);
            res.json({ success: false, error: err });
        });
});

// 주의) socket 을 사용할 때는 http.listen 으로 PORT를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
