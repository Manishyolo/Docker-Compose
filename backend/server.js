import express from "express"
const app = express();



app.get("/api", (req, res) => {
    res.send("Hello World")
})

app.get("/api/user", (req, res) => {
    res.status(200).json({
        name: "Sheryian Chorot",
        email: "sheryian@chorot.com"
    })  
})


app.listen(4000,()=>{
    console.log("server running on port 4000");
    
})