const btnEl = document.getElementById("btn");
const timer = document.getElementById("demo");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiKey = "QqcqSG9d/fxneELAdgYt3w==oVYKKs6BfPQU4GRi";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey
    },
};

const apiURL = "https://api.quotable.io/random"

async function getQuote(){

    try {
        quoteEl.innerText = "Loading a quote...";
        btnEl.disabled = true;
        btnEl.innerText = "Wait a moment...";
        authorEl.innerText = "Loading author...";
        const response = await fetch(apiURL, options)
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~" + quoteAuthor;
        btnEl.disabled = false;
        btnEl.innerText = "Get a Quote";
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later.";
        btnEl.disabled = false;
        console.log(error);
    };
  
}
btnEl.addEventListener("click", getQuote);
