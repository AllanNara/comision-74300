import express from "express";
import viewsRouter from "./routes/views.router.js";
import hbs from "express-handlebars";
import http from "http";
import { Server } from "socket.io"

const app = express();
const serverHttp = http.createServer(app)
const io = new Server(serverHttp)

const messages = [];

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado: " + socket.id)

  socket.emit("all-msgs", messages)

  socket.on("login", (data) => {
    // socket.emit("new-user", data); // Lo envia al cliente que disparo el evento
    // io.emit("new-user", data); // Lo envia a todos los clientes conectados!
    socket.broadcast.emit("new-user", data) // Lo envia a todos excepto al que disparo el evento
  })

  socket.on("new-msg", (data) => {
    messages.unshift(data)
    io.emit("all-msgs", messages) 
  })

});

// CONFIGURACION DE HANDLEBARS
app.engine("handlebars", hbs.engine());  // 1. implementamos el motor
app.set("views", import.meta.dirname + "/views") // 2. definimos carpeta de vistas
app.set("view engine", "handlebars") // 3. definimos handlebars como nuestro motor de plantillas

// MIDDLEWARE
app.use(express.static(import.meta.dirname + "/public"));

// RUTAS
app.use("/", viewsRouter)

serverHttp.listen(8080, () => console.log(`server listening on port 8080`))
