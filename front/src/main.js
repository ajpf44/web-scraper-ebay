import "./style.css";
import setupFetch from "./fetch-api";

document.querySelector("#app").innerHTML = `
  <div>
     <h1>A simple webscraper on ebay website</h1>
      <p class="made-info">
        made by <a href="https://ajpf44.com.br" target="_blank">ajpf44</a>
      </p>
        <div class="search-container">
            <label for="keyword-input">
                keyword: 
                <input type="text" name="keyword-input" id="keyword-input">
            </label>

            <button id="button-search">Search</button>
        </div>

        <div>
            <h4>Result:</h4>
            <div id="div-result">
    
            </div>
      </div>
  </div>
`;

document.querySelector("#button-search").addEventListener("click", () => {
	setupFetch(
		document.querySelector("#keyword-input"),
		document.querySelector("#div-result")
	);
});
