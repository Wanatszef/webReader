import Papa from 'papaparse';

const parseCSV = (fileContent: string): string[] => {
    if (typeof fileContent !== 'string') {
        throw new Error('Invalid file content. Expected a string.');
    }

    const csvData = Papa.parse<{Domain: string}>(fileContent, {
        header: true,
        skipEmptyLines: true,
    });

    
    const domains: string[] = csvData.data.map((row: { Domain: string }) => row.Domain).filter(Boolean);

    //fix  SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data
    return domains;
};

export default parseCSV;
