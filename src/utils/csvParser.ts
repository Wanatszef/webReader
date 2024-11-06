import Papa from 'papaparse';

const parseCSV = (fileContent: string) => {

    if (typeof fileContent !== 'string') {
        throw new Error('Invalid file content. Expected a string.');
    }

    const csvData = Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true,
    });

    return csvData.data;
};

export default parseCSV;
