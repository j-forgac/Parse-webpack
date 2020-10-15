import {generateArticle} from "./components";

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
    for(let x =0; x < articles.length; x++){
        generateArticle(articles[x].title, articles[x].description);
    }
}


