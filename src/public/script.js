function addDomainsToTable(data) {

    if(data !== null)
    {
    const table = document.querySelector("#domainsTable");
    table.style.display= "block";

    const tableBody = document.querySelector("#domainsTable tbody");

    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");

        const domainCell = document.createElement("td");
        domainCell.textContent = item.Domain;
        row.appendChild(domainCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = item.Status;
        row.appendChild(statusCell);

        const cartCell = document.createElement("td");
        cartCell.textContent = item.Cart ? "Yes" : "No";
        row.appendChild(cartCell);

        const advertisementCell = document.createElement("td");
        advertisementCell.textContent = item.Advertisement ? "Yes" : "No";
        row.appendChild(advertisementCell);

        // Dodaj wiersz do tabeli
        tableBody.appendChild(row);
    });
    }
}


document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Proszę wybrać plik!');
        return;
    }


    document.getElementById('loadingSpinner').style.display = 'block';

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
            },
            body: file,
        });

        const data = await response.json();
        addDomainsToTable(data);

        document.getElementById('loadingSpinner').style.display = 'none';

    } catch (error) {
        console.error('Błąd:', error);


        document.getElementById('loadingSpinner').style.display = 'none';
    }
});
