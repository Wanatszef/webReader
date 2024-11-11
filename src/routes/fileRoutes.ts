import { Elysia } from 'elysia';
import { handleFileUpload } from '../controllers/fileController';
import { join } from 'path';
import { readFileSync } from 'fs';

const fileRoutes = new Elysia();

fileRoutes.post('/upload', handleFileUpload);

fileRoutes.get('', () => {
    const htmlPath = join(__dirname, '../public/index.html');
    const htmlContent = readFileSync(htmlPath, 'utf-8');
    return new Response(htmlContent, {
        headers: { 'Content-Type': 'text/html' },
    });
});

fileRoutes.get('/script.js', () => {
    const jsPath = join(__dirname, '../public/script.js');
    const jsContent = readFileSync(jsPath, 'utf-8');
    return new Response(jsContent, {
        headers: { 'Content-Type': 'application/javascript' },
    });
});

export default fileRoutes;
