const express = require("express");
const app = express(3000);
const PORT = 3000;

app.get("/", (req,res) =>{
    res.send("welcom to Hellword");
})

app.listen(PORT, () => {
    console.log("Server is running");
})

