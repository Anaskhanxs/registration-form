require("dotenv").config();
let express = require("express");
let cors = require("cors");
let path = require("path");
let db_connect = require("./config/db_connect");
let router = require("./routes/app-routes");
let app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
db_connect();
app.use("*", (req, res, dirname) => {
  res.sendfile(path.join(__dirname, "dist", "index.html"));
});
app.listen(process.env.PORT || 3000, () => {
  console.log("sever is started");
});
