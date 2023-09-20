import express from "express";
const app = express();
import routers from "./src/routes/index.js";
// import cors from "cors";
// import bodyParser from "body-parser"
// import morgan from "morgan";
// import path from "path";
// const jwt_decode = require("jwt-decode");
// import { connectdb, syncdb } from "./src/db";

 

// syncdb();


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(morgan("dev"));
// app.use(cors());
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
        "Content-Security-Policy": "default-src *",
        "X-Content-Security-Policy": "default-src *",
        "X-WebKit-CSP": "default-src *"
    })
    next();
});
app.get("/", (req,res )=>{
    res.send("nice working")
})


app.use(express.json())
app.use(routers);
// app.get("/ondc-site-verification.html", (req, res)=>{
//     res.sendFile(path.join(__dirname, 'verification.html'));
// });


// app.get("/", (req, res) => {
//    res.redirect("https://thesellerapp.com");
// });
// app.get("/.well-known/pki-validation/18BAE284427CCB3ECB9FA476E72AB633.txt", (req, res)=>{
//     res.sendFile(path.join(__dirname, './18BAE284427CCB3ECB9FA476E72AB633.txt'))
// });

const port = process.env.PORT || 7001;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})