import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/image", (req, res)=>{
    res.render("image.ejs");
})

app.get("/advanced", (req, res)=>{
    res.render("advanced.ejs");
})

app.listen(port, (req, res)=>{
    console.log(`Server is currently listening on port ${port}`);
});