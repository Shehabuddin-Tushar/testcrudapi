const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000
const app = express();
const dbconnection=require("./config/dbconnection")
const userrouter=require("./routes/userroute")
app.use(cors());
app.use(express.json());
dbconnection(process.env.DB_URL)

app.use("/api/user/",userrouter)


app.get("/", (req,res) => {
    res.json({name:"tushar"})
})
app.listen(port, () => {
    console.log("surver running successfully")
});

