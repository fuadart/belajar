const http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    name: "stephanie",
    age: 21,
  };
  response.end(JSON.stringify(data));
}

http.createServer(onRequest).listen(8000);
