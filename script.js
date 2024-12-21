const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    // Yönlendirme
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Ana sayfaya hoş geldiniz!');
    } else if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        // İstek gövdesini toplama
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Veri alındı', data: body }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Sayfa bulunamadı');
    }
});

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});
