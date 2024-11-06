import Papa from 'papaparse';

const parseCSV = (fileContent: string) => {

    if (typeof fileContent !== 'string') {
        throw new Error('Invalid file content. Expected a string.');
    }

    console.log('Zawartość pliku:', fileContent);

    const csvData = Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true,
    });
    
    console.log('Parsed CSV data:', csvData.data);
    
    return csvData.data;
};

export default parseCSV;
