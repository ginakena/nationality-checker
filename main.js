const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('formInput');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    
    if (name === "") {
        alert('Please enter a name');
        return;
    }
     
    try {
        resultDiv.textContent = "Loading..."
        const response = await fetch(`https://api.nationalize.io/?name=${name}`)
        const data = await response.json();
        
        let country = data.country[0].country_id;
        let probability = data.country[0].probability * 100;
        
        resultDiv.innerHTML = `
            ${name} is <span>${country}</span> with 
            <span>${probability.toFixed(1)}%</span> certainty
        `;

    } catch (e) {
        resultDiv.innerHTML = `Something went wrong`
        console.log(e)
    }

});
