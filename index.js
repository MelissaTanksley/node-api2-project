const express = require("express");
const db = require("./data/db");
const postRoutes = require("./postRoutes")
const server = express();

server.use(express.json())
server.use(cors())
server.use("/api/posts", postRoutes)


server.use("/", (req, res) => res.send("API up and running!"));
server.listen(7777, () => console.log("API running on port 7777"));