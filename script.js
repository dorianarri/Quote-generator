const quoteElement = document.getElementById('quote');
const quoteBtn = document.getElementById('quotebtn');

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

function generateQuote() {
  fetch("https://zenquotes.io/api/quotes/")
  .then((res) => res.json())
  .then((data) => {
    quoteElement.innerHTML = data[Math.floor(Math.random() * 51)].q;
  })
}

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data)
  quoteElement.innerHTML = data[Math.floor(Math.random() * 51)].q;
}

getapi(api_url);
