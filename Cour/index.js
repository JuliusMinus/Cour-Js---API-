// XMLHHttpRequest

function reqListener() {
  //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
//res.open("get", "data.json", true)
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// Fetch

//fetch("monlien", "object d'options").then((response) => {
//response
//}).catch((err) => console.log(err))

fetch("data.txt").then((res) => res.text());
//.then((data) =>
//console.log(data))

fetch("data.json").then((res) => res.json());
//.then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//fetch("data.json", init).then((res) => console.log(res));

// CRUD

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Julius",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});
//------------------------------------------------

// Asynchrone

setTimeout(() => {
  //console.log("test");
}, 2000);

// promise

// fetch("monlien").then((res) => res)

// async/await

async function fetchData() {
  await fetch("monLien");
  // attend que le await soit exécuté avant de faire la suite

  executeFonction();
}

const fetchData2 = async () => {
  await fetch("monLien");
  // attend que le await soit exécuté avant de faire la suite

  executeFonction();
};
