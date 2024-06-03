import express from "express";

const server = express();
const PORT = 8080;
const HOST = "localhost";

server.get("/saludo", (req, res) => {
    res.send("Hola!");
});

server.get("/despedida", (req, res) => {
    res.send("Hasta luego!");
});

server.listen(PORT, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});