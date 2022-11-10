const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "3c28e899";
const APP_key = "8d6d096a0440627cd4bdf97c24792dff";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="Recipe Image">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${result.recipe.url}">View Recipe</a>
        </div>     
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
