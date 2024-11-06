document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('Proszę wybrać plik!');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        alert('File has been send successfully!');
    } catch (error) {
        console.error('Błąd:', error);
        alert('An error occurred while sending the file.');
    }
});
