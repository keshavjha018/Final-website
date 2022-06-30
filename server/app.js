var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");
var cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();
app.use(
    session({
        name: "vidkarya",
        secret: "OAUTH_SECRET",
        resave: false,
        saveUninitialized: true,
        cookie: {
        maxAge: 1000 * 60 * 100,
        }
    })
);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
