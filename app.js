require("dotenv").config();
require("./db");
const cors = require('cors');
const express = require("express");


const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();
app.use(cors());

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const boardsRoutes = require("./routes/boards.routes");
app.use("/boardsauth", boardsRoutes);

require("./error-handling")(app);

module.exports = app;
