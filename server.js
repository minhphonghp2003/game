// server.js
const express = require("express");
const http = require("http");
var cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
let visitorCount = 0;

io.on("connection", (socket) => {
    visitorCount += 1;
    console.log("so connect", visitorCount);
    io.emit("visitorCount", visitorCount);

    socket.on("disconnect", () => {
        visitorCount -= 1;
        console.log("so disc");
        io.emit("visitorCount", visitorCount);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
