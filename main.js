const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const starwars = require("./sw");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./sqlite/chinook.db");
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ saludo: "App Works" });
});

// Ruta GET para obtener los datos de la consulta
app.get("/Generos", (req, res) => {
  const query = "SELECT * FROM genres";
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get("/Genero/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = `SELECT * FROM genres WHERE GenreID = ${id}`;
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

/**
 * NEW GENER
 */
// app.get("/crear/:genre", (req, res) => {
//   const genre = req.params.genre;
//   console.log(genre);
//   const query = `INSERT INTO genres  (Name)
//    VALUES ('${genre}');`;
//   db.all(query, (err) => {
//     err
//       ? res.status(500).json({ error: err.message })
//       : res.redirect("http://localhost:3000/Generos");
//   });
// });

app.post("/genero", async (req, res) => {
  try {
    console.log(req.body);
    const genre = req.body.genre;
    const sql = `INSERT INTO genres  (Name) VALUES ('${genre}');`;
    await db.all(sql,(err)=>{
        (err)?console.log(err):res.status(200).json({ message: "Genero creado" });

    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * END NEW GENER
 */

app.get("/deleteGenero/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM genres WHERE GenreId = ${id}`;
  db.all(query, (err) => {
    err
      ? res.status(500).json({ error: err.message })
      : res.redirect("http://localhost:3000/Generos");
  });
});

app.put("/actualizar", async(req, res) => {
  //http://localhost:3000/actualizar?GenreId=30&name=Salsa
     const genre = req.body.genre;
     const id = req.body.id;
  console.log(id + " " + genre);
  const query = `UPDATE genres set Name ='${genre}' where GenreId = ${id}`;
   db.all(query, (err) => {
    err
      ? res.status(500).json({ error: err.message })
      : res.redirect("http://localhost:3000/Generos");
  });
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
