const http = require("http");

const server = http.createServer((requestm, response) => {
  response.end("Mi primer hola mundo desde el backend")
})

server.listen(8000, () => console.log(`Listening on port 8000`))

