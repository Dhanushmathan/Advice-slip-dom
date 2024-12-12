const blockQuoteEl = document.querySelector("blockquote > p");
const refreshBtn = document.querySelector("button");

const API_URL = "https://api.adviceslip.com/advice";

refreshBtn.style.display = "none";

refreshBtn.addEventListener("click", () => {
    window.location.href = "/";
});

// Call the API.
// const adviceAPI = new XMLHttpRequest();
// adviceAPI.responseType = "json";
// adviceAPI.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         blockQuoteEl.textContent = adviceAPI.response.slip.advice;
//     }
// };

// adviceAPI.open("GET", "https://api.adviceslip.com/advice", true)
// adviceAPI.send()


// fetch API
// const result = fetch(API_URL).then((response) => {
//     return response.json()
// })
//     .then((data) => {
//         return data
//     })
//     .catch((error) => {
//         console.error("This URL network error: ", error);
//     });


// await async fetch
async function getAdvices() {
    try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("This URL network error: ", error);
    }
}

const adviceData = await getAdvices();

blockQuoteEl.innerText = adviceData.slip.advice;

// Display the button after loading data
refreshBtn.style.display = "block";