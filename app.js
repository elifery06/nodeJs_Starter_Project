const express =require ("express")
const app= express ()
require("dotenv").config()
const port =process.env.port || 5001
require("./src/db/dbConnection")

app.get("/",(req,res)=>{
    res.json({
        message: "Hoş Geldiniz!"
    })
})

app.listen(port, ()=>{
    console.log(`Server ${port} portunda başlatıldı...`);
})