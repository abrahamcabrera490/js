const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const starwars = require("./sw");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlite/chinook.db');

app.use(bodyParser.json());

// Send welcome message
app.get("/", (req, res) => {
  res.json({ saludo: "App Works" });
});


// Ruta GET para obtener los datos de la consulta
app.get('/Generos', (req, res) => {
  const query = 'SELECT * FROM genres'; 
  db.all(query, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get('/Genero/:id', (req, res) => {
  const id = req.params.id
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
  
app.get('/crear/:genre', (req, res) => {
  const genre = req.params.genre;
  console.log(genre);
  const query = `INSERT INTO genres  (Name)
   VALUES ('${genre}');`; 
  db.all(query, (err) => {
     (err)? res.status(500).json({ error: err.message }) : res.redirect('http://localhost:3000/Generos');  
  });
});
app.get('/deleteGenero/:id',(req,res)=>
{
const id = req.params.id;
const query = `DELETE FROM genres WHERE GenreId = ${id}`;
db.all(query,(err)=>{
  (err)? res.status(500).json({ error: err.message})  : res.redirect('http://localhost:3000/Generos'); 
});
});
app.get('/actualizar',(req,res)=>
{
  //http://localhost:3000/actualizar?GenreId=30&name=Salsa
const id = req.query.GenreId;
const name = req.query.name
console.log(id + ' ' + name);
const query = `UPDATE genres set Name ='${name}' where GenreId = ${id}`;
db.all(query,(err)=>{
(err)? res.status(500).json({ error: err.message})  : res.redirect('http://localhost:3000/Generos'); 
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
