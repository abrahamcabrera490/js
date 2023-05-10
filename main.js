const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const starwars = require("./sw");

app.use(bodyParser.json());

// Send welcome message
app.get("/", (req, res) => {
  res.json({ saludo: "App Works" });
});

/**
 * CONECTAR SQLITE
 *
 * Ver imagen de referencia en carpeta sqlite
 * Instalar sqlite3 https://www.npmjs.com/package/sqlite
 * Genera un select y retornalo a la ruta "/sqlite/select"
 *
 * Extra: Genera un insert y retornalo a la ruta "/sqlite/insert"
 * Extra: Genera un update y retornalo a la ruta "/sqlite/update"
 * Extra: Genera un delete y retornalo a la ruta "/sqlite/delete"
 */

// app.get("/sqlite/select", (req, res) => {
//   res.json(rows);
// });

// Start server
app.listen(port, () => {
  console.clear();
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
