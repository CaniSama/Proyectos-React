const app = require("./config/server");
const dbConnection = require("./config/bdconnection");


const db = dbConnection();



app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE nombre = ? and  password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Hubo error con la conexion a la BD");
      }

      if (result.length > 0) {
        res.send(result);
      } 

    }
  );
});


//Iniciando servidor
app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
