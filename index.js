const express = require("express");
const http = require("http");

const socketIo = require("socket.io");
require("dotenv").config();

const { getReview } = require("./utils");
PORT = process.env.PORT || 5500;

// const router = require("./routers/review");
require("./db/mongoose");

const app = express();
const server = http.createServer(app, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
const io = socketIo(server);

io.on("connection", async (socket) => {
  console.log("New client connected");
  try {
    const response = await getReview();
    socket.emit("getReviews", response);
  } catch (error) {
    console.error(error);
  }

  socket.on("getReviews", async () => {
    console.log("get review called ");
    try {
      const response = await getReview();
      socket.emit("getReviews", response);
    } catch (error) {
      console.error(error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Realtime Server is up on PORT ${PORT}!`);
});
