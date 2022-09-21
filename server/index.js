const express = require("express");
const bodyParserer = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(bodyParserer.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "evento_cit_p",
});

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

app.listen(3001, () => {
  console.log("Running Server 3001");
});
