let express=require("express");
let mysql=require("mysql2");



let server=express();


server.use(express.static("html"));

server.use(
    express.urlencoded({
        extended:true
    })
);

let DB=mysql.createConnection({

    user : "abenezer",
    password : "abenezer",
    database : "form_data"
});

DB.connect((err) =>{
    if(err){
        console.log("connection to the DB failed" , err.message);
    }
    else
    {
        console.log("connection to the DB is successful   ");
    }
});


server.get("/nameed" ,(req, res)=>{


   
});

server.post("/registered",(req,res) =>{

    console.log(req.body);

    res.send("your data is recived");






});




server.listen(3000,() => {

    console.log("listening on http://localhost:3000/")

});
