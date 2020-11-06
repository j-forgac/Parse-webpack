import '../styles.scss';
import {generateArticle} from "./components";

const axios = require('axios');
let articleCount = 20

async function runAxious() {
    console.log("axious");
    await axios.get('http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=3b14d1d758fd4b3daf7a06628c65b704')
        .then((res) => {
            console.log("axious.then");
            const data = res.data;
            console.log(data);
            for (let i = 0; i < articleCount; i++){
                clanky.push({title: data.articles[i].title, description:data.articles[i].description, imageUrl: data.articles[i].urlToImage });
            }


        })
        .catch((reason) => {
            console.log("axious.catch -*- reason:");
            console.log(reason);
        });
    console.log("axious done");
}

let clanky = [];

window.onload = async function () {
    await runAxious();
    console.log("clanky vypis");
    for (let x = 0; x < clanky.length; x++) {
        generateArticle(clanky[x].title, clanky[x].description, clanky[x].imageUrl);
    }
}




