import { Context, error } from 'elysia';
import parseCSV from '../utils/csvParser';

export const handleFileUpload = async (ctx: Context) => 
{
    
    const formData = ctx.body as FormData;

    const file = formData.get('file');

    if(!(file instanceof Blob))
    {
        return {error: "File not found"};
    }

    const fileContent = await file.text();

    const data = parseCSV(fileContent);

    return {message: 'File received', data};
}
