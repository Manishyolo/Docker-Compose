import express from "express"
import fs from "fs"

const app = express();


app.use(express.static("public"))

app.get("/api", (req, res) => {
    res.send("Hello World")
})

app.get("/api/user", (req, res) => {
    res.status(200).json({
        name: "Sheryian Chorot",
        email: "sheryian@chorot.com"
    })  
})
app.use((req, res) => {
    res.sendFile("public/index.html", { root: __dirname })
})

app.listen(4000,()=>{
    console.log("server running on port 4000");
    
})