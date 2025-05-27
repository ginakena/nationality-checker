const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const resultDiv = document.getElementById('result');

nameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    
    if (!name) {
        alert('Please enter a name');
        return;
    }
     
    try {
        const response = await fetch( `https://api.nationalize.io/?name=$(name)`)
        const results = await response.json();
        

    }
  
});

