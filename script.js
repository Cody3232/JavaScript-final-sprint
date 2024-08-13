// Confirm that the JavaScript file is linked correctly
console.log("JavaScript file is linked successfully!");

// Fetch the JSON file and process its content
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);          // Log the entire data array
        processData(data);          // Process and log individual records
        displayData(data);          // Display the data on the web page
    })
    .catch(error => console.error('Error fetching the JSON file:', error));

// Function to process the data and log specific key-value pairs
function processData(data) {
    data.forEach(record => {
        console.log(`Name: ${record.name}, Occupation: ${record.occupation}`);
    });
}

// Function to get and return all names as a comma-separated string
function getNames(data) {
    return data.map(record => record.name).join(', ');
}

// Function to calculate and return the average age
function getAverageAge(data) {
    const totalAge = data.reduce((sum, record) => sum + record.age, 0);
    return (totalAge / data.length).toFixed(2);
}

// Function to get and return all occupations as a comma-separated string
function getOccupations(data) {
    return data.map(record => record.occupation).join(', ');
}

// Function to display the processed data in the HTML
function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>Names:</strong> ${getNames(data)}</p>
        <p><strong>Average Age:</strong> ${getAverageAge(data)}</p>
        <p><strong>Occupations:</strong> ${getOccupations(data)}</p>
    `;
}
