export function generateArticle (title, description, imageUrl){
    const texts = document.createElement("div");
    const myContainer = document.createElement("div");
    const header = document.createElement("h2");
    const mainImage = document.createElement("img");
    const desc = document.createElement("p");
    header.innerText = title;
    desc.innerText = description;

    texts.appendChild(header);
    texts.appendChild(desc);
    myContainer.appendChild(mainImage);
    myContainer.appendChild(texts);
    texts.setAttribute("class", "texts");

    mainImage.setAttribute("src", imageUrl);
    myContainer.setAttribute("class", "row");

    document.getElementById("articles1").appendChild(myContainer);

}
