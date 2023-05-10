const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const starwars = require("./sw");

app.use(bodyParser.json());

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


app.get("/starwars", async(req, res)=>{

const datos = await starwars();
const html = ` <table style ="border: 1px solid black">
<tr>
  <th>Nombre</th>
  <th>Peso</th>
  <th>Estatura</th>
</tr>
<tr>
  <td>${datos.data.name}</td>
  <td>${datos.data.mass}</td>
  <td>${datos.data.height}</td>
  
</tr>

</table> `
res.send(html);
});

app.post("/hello", (req, res) => {
  const { saludo } = req.body;

  res.json( {saludo, name:"El pepe" } );
});

app.delete("/hello", (req, res) => {
  res.json({ saludo: "Adiós" });
});

// Start server
app.listen(port, () => {
  console.clear();
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
