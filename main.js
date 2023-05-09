const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/",(req,res)=>{

res.send({saludo: "Bienvenido"});

});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
