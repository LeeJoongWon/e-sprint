const http = require('http');

const PORT = 4999;

const ip = 'localhost';

const server = http.createServer((request, response) => {
    // request = 받은 데이터
    // response = 보내야 될 데이터

    console.log(
        `http request method is ${request.method}, url is ${request.url}`
    );
    let body = [];
    if (request.method === 'OPTIONS') {
        /*CORS 설정을 통해 서버의 응답 헤더에 ‘Access-Control-Allow-Origin’을 작성하면 접근 권한을 얻을 수 있습니다. */
        response.writeHead(200, defaultCorsHeader);
        response.end();
    }
    if (request.method === 'POST') {
        // POST 일때만
        request
            .on('data', (chunk) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                response.writeHead(200, defaultCorsHeader);
                if (request.url === '/upper') {
                    response.end(body.toUpperCase());
                } else if (request.url === '/lower') {
                    response.end(body.toLowerCase());
                } else {
                    response.writeHead(404, defaultCorsHeader);
                    response.end();
                }
            });
    }
});

server.listen(PORT, ip, () => {
    console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': 10,
};
