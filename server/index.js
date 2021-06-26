const  express = require("express");
const  cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//middleware

app.use(cors());
app.use(express.urlencoded());

//database

const PORT = process.env.PORT || 8080 ;
const URI=`mongodb+srv://mandyxmen:<pass>@cluster0.df1fz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(URI)
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Database connected successfully, server started at port ${PORT}`);
    });
})
.catch((error)=>{
    console.log("Connection failed " , error.message);
})

app.get('/' , (req,res)=>{
    res.status(200).send("This is the homepage");
});