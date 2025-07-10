// ❌ Código inseguro para probar BugBot
const http = require('http');
const fs = require('fs');

const PORT = 8080;

// ⚠️ Hardcodeando credenciales (mala práctica)
const username = 'admin';
const password = '123456';

// ⚠️ Usando eval (muy inseguro)
function runUserCode(input) {
    return eval(input);  // Esto puede ejecutar cualquier cosa
}

// ⚠️ Inyección de contenido en HTML sin sanitizar
const server = http.createServer((req, res) => {
    const userInput = req.url.split('=')[1];
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Hola ${userInput}</h1>`);  // No sanitizado
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});