const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    console.log({ test: data });

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        // client.send(data);
        console.log("data", data);
      }
    });
  });

  ws.on("test", function incoming(data) {
    // console.log({ test: data });
    ws.send("test recived");
  });
});
