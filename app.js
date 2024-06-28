const express = require ("express");
const path = require ("path");
const app = express();

app.use ( express.static("./public") );

const port=3030;
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));

app.get("/",(req, res)=>{
    res.sendFile(path.resolve("./views/home.html"));
})

app.get("/register",(req, res)=>{
    res.sendFile(path.resolve("./views/register.html"));
})

app.get("/login",(req, res)=>{
    res.sendFile(path.resolve("./views/login.html"));
})