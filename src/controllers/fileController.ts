import { Context } from 'elysia';
import parseCSV from '../utils/csvParser';
import checkDomainStatus from '../utils/checkDomainStatus';

export const handleFileUpload = async (ctx: Context) => {
    try {
        const fileBuffer = await ctx.body as Buffer;

        
        const fileContent = Buffer.from(fileBuffer).toString('utf8');

      
        const data: string[] = parseCSV(fileContent);

        if(data.length !== 0)
        {
            for (let i = 0; i < data.length; i++) {
                checkDomainStatus(data[i]);
              }
              //todo find out does it work
        }
        
    } catch (error) {
        console.error('Błąd przetwarzania pliku:', error);
        return { error: 'Błąd podczas przetwarzania pliku' };
    }
};
