/**
 * First we have to assign the first template at the beginning
 */
const container = document.getElementById("container");
const template = document.getElementById("thanks-rating");
const form = document.getElementById("rating-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const radioButtons = document.getElementsByName("item");
  let radioValue = "";
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      radioValue = radioButton.value;
      break;
    }
  }
  if (radioValue === "") {
    alert("Select a rate, please!");
  } else {
    container.innerHTML = "";
    container.innerHTML = `
        <div class="thanks-container">
            <img src="./assets/images/illustration-thank-you.svg" alt="thks">
            <p id="rate-value">You selected ${radioValue} out of 5</p>
            <div class="thanks-info">
                <h1>Thank you!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
        `;
  }
});
