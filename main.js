const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("formInput");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  resultDiv.innerHTML = "";
  resultDiv.style.display = "block";

  const nameValue = nameInput.value;

  if (nameValue === "") {
    alert("Please enter a name");
    return;
  }

  try {    
    const response = await fetch(
      `https://api.nationalize.io/?name=${nameValue}`
    );
    const data = await response.json();

    let { country, count } = data;
    country.forEach((element) => {
      let { country_id, probability } = element;
      resultDiv.innerHTML += `
             ${getCountryName(country_id)} <span>(${country_id})</span> with <span>${(probability * 100).toFixed(2)}%</span> certainty</p>
        `;

    });

    // let country = data.country[0].country_id;
    // let probability = data.country[0].probability * 100;
  } catch (e) {
    resultDiv.innerHTML = `Something went wrong`;
    console.log(e);
  }
});

function getCountryName(countryCode) {
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return regionNames.of(countryCode);
}
