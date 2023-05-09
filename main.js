const express = require("express");
const app = express();
const port = 3000;

// Send static files
app.get("/", (req, res) => {
  const titulo = "Hola Ing";
  const html = `
    <html>
      <head>
        <title>${titulo}</title>
      </head>
      <body>
        <h1>${titulo}</h1>
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

app.post("/hello", (req, res) => {
  const { saludo } = req.body;

  res.json({ saludo: saludo });
});

// Start server
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
