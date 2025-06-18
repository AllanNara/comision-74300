import express from "express";
import hbs from "express-handlebars";
import allRoutes from "./routes/index.js";
import viewsRouter from "./routes/views.router.js";

import actividadRouter from "./routes/actividad.router.js"

const PORT = 8080;
const app = express();

app.engine("handlebars", hbs.engine());
app.set("views", import.meta.dirname + "/views");
app.set("view engine", "handlebars");

app.use("/static", express.static(import.meta.dirname + "/public"))
app.use(express.json());

app.use("/", viewsRouter);
app.use("/api", allRoutes);

// Actividad de handlebars
app.use("/actividad", actividadRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
