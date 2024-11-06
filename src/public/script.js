document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Proszę wybrać plik!');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream', 
            },
            body: file, 
        });
        const data = await response.json();
        console.log(data);
        alert('Plik został wysłany pomyślnie!');
    } catch (error) {
        console.error('Błąd:', error);
        alert('Wystąpił błąd podczas wysyłania pliku.');
    }
});
