const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json([
            {
                title: "안녕하세요.",
                content: "안녕하세요. 네어브입니다.",
            },
        ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});