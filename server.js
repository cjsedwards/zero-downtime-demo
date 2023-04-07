const express = require("express");
const routes = require("./routes");
const database = require("./database")

// App
const app = express();

// Database
database.initDb()

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

app.use('/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));