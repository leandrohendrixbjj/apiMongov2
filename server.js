import http from "http"

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" })
    res.end("Welcome to Server")
})

server.listen(3000, () => {
    console.log(`Server is running at ${3000}`);
})
