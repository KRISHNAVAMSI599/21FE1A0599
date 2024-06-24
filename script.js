function fetchNumbers() {
    const numberType = document.getElementById('numberType').value;
    const url = `http://localhost:9876/numbers/${numberType}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayResponse(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayError('Failed to fetch numbers. Please try again.');
        });
}

function displayResponse(data) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p><strong>Window Previous State:</strong> ${data.windowPrevState.join(', ')}</p>
        <p><strong>Window Current State:</strong> ${data.windowCurrState.join(', ')}</p>
        <p><strong>Numbers Received:</strong> ${data.numbers.join(', ')}</p>
        <p><strong>Average:</strong> ${data.avg !== null ? data.avg.toFixed(2) : 'N/A'}</p>
    `;
}

function displayError(message) {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}
