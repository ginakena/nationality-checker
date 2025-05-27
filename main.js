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
        let {country, name} = data;
        console.log(data)


    } catch (e) {
        resultDiv.innerHTML = `Something went wrong`
    }

  
});

