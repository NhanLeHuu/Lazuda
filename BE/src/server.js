// Require
const express = require("express");
const router = require("./router");
const compression = require("compression")
const cookieParser = require("cookie-parser")
const connectFlash = require("connect-flash")
const expressSession = require("express-session")
const cors = require("cors");
// Import
const IpAddress = require("./models/ipaddress")
const Socket = require("./models/socket")
const ConnectDB = require("./db/connect");

const socket = new Socket();
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(compression()) // cải thiện tốc độ web
app.use(cookieParser()) // res.cookie('sites', 'anonystick.com');
app.use(connectFlash()) // 
app.use(expressSession({
    secret: "fd34s@!@dfa453f3DF#$D&W",
    cookie: {},
    resave: true,
    saveUninitialized: true
})) // 
app.use(cors())
app.use(router)
app.set("port", process.env.PORT || 5000)

let http = require("http").Server(app);
let io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});
socket.web(io);
module.exports = io

const ipAddress = new IpAddress()
var ip = ipAddress.getIp()["Wi-Fi"][0]
ipAddress.configFile(ip)

ConnectDB.onConnect();
http.listen(5000, ip, () => {
    console.log("Server Lazuda đang khởi động: " + ip + ":5000");
});