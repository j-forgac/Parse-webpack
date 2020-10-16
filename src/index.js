import {generateArticle} from "./components";

const axios = require('axios');

function runAxious () {
    console.log("axious");
    axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-16&sortBy=publishedAt&apiKey=3b14d1d758fd4b3daf7a06628c65b704')
        .then((res) => {
            console.log("axious.then");
            const data = res.data;
            for (let value of data.articles) {
                console.log(value.author);
            }
        })
        .catch((reason) => {
            console.log("axious.catch -*- reason:");
            console.log(reason);
        });
}

const articles = [
    {
        title: "Článek 1",
        description: "Lorem ipsum"
    },
    {
        title: "Článek 2",
        description: "Aliquam in lorem"
    },
    {
        title: "Článek 3",
        description: "Facilis est et"
    },
    {
        title: "Článek 4",
        description: "Praesent vitae arcu"
    },
    {
        title: "Článek 5",
        description: "Fusce tellus odio"
    },
    {
        title: "Článek 6",
        description: "Došel toaletní papír? Kupte BLESK!"
    },
    {
        title: "Článek 7",
        description: "Fusce tellus odio"
    },
    {
        title: "Článek 8",
        description: "Tvrdí Američtí vědci..."
    },
    {
        title: "Článek 5",
        description: "Fusce tellus odio"
    },
    {
        title: "Článek 6",
        description: "Aliquam in lorem"
    }
];

window.onload = function () {
    runAxious();
    console.log("clanky vypis");
    for (let x = 0; x < articles.length; x++) {
        generateArticle(articles[x].title, articles[x].description);
    }
}



