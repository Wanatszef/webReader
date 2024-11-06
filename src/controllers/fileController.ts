import { Context} from 'elysia';
import parseCSV from '../utils/csvParser';

export const handleFileUpload = async (ctx: Context) => {
    try {
        const fileBuffer = await ctx.body as Buffer;

        const fileContent = fileBuffer.toString('utf8');

        const data = parseCSV(fileContent);

        return { message: 'File received', data };
        
    } catch (error) {
        console.error('Błąd przetwarzania pliku:', error);
        return { error: 'Błąd podczas przetwarzania pliku' };
    }
};
