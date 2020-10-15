export function generateArticle (title, description){
    const container = document.createElement("div");
    const header = document.createElement("h2");
    const desc = document.createElement("p");
    header.innerText = title;
    desc.innerText = description;
    container.appendChild(header);
    container.appendChild(desc);

    document.getElementById("trustworthy-articles").appendChild(container);
}
