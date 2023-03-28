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
