let Button = document.querySelector(".advice_gen");
let AdviceContent = document.getElementById("adviceContent");
let AdviceID = document.getElementById("adviceID");

function SearchAdvice(randomNumber) {
  let FetchURL = `https://api.adviceslip.com/advice/${randomNumber}`;
  fetch(FetchURL)
    .then((response) => response.json())
    .then((data) => {
      AdviceContent.innerHTML = data.slip.advice;
      AdviceID.innerHTML = data.slip.id;
    });
}

// setInterval(function () {
//   let Numb = Math.floor(Math.random() * 220) + 1;
//   SearchAdvice(Numb);
// }, 5000);

Button.addEventListener("click", function () {
  let Numb = Math.floor(Math.random() * 220) + 1;
  SearchAdvice(Numb);
});
