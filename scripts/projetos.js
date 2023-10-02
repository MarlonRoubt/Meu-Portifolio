// https://api.github.com/users/<username>>/repos
let GITHUB_URL =  "https://api.github.com/users"
let BEARER_TOKEN = "";
let USERNAME = "MarlonRoubt";

let divProjetos = document.getElementById("projetos");

async function listaProjetos() {
    fetch(`${GITHUB_URL}/${USERNAME}/repos`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "Authorization": `Bearer ${BEARER_TOKEN}`,
        }
    })
    .then(response => response.json())
    .then(responseJSON => {
        responseJSON.map(repositorio => {
            let div = document.createElement("div");
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let a = document.createElement("a");
            ul.appendChild(li);
            div.appendChild(ul);
            li.appendChild(a);
            a.innerHTML = repositorio.name;
            a.setAttribute("href", `https://github.com/MarlonRoubt/${repositorio.name}`);
            divProjetos.appendChild(div);
        });
    }).catch(error => {
        console.log("DEU RUIM", error)
    })
}

listaProjetos()