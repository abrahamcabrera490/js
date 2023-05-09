const express = require("express");
const app = express();
const port = 3000;

// Send static files
app.get("/", (req, res) => {
  const html = `
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Home</h1>
        <p>Esta es la página de inicio</p>
      </body>
    </html>
  `;

  res.send(html);
});

// Send welcome message
app.get("/hello", (req, res) => {
  // res.send({ saludo: "Bienvenido" });
  res.json({ saludo: "Bienvenido" });
});

// Start server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
