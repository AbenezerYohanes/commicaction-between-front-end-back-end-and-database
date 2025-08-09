let express=require("express");
let mysql=require("mysql2");
let cors=require("cors")



let server=express();

server.use(cors());
server.use(express.static("html"));



server.use(
    express.urlencoded({
        extended:true
    })
);
server.use(express.json());

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




server.post("/registered",(req,res) =>{

    console.log(req.body);

    let { first_name, last_name, phone_number } = req.body;
   

  let insert_query=`INSERT INTO users (first_name, last_name, phone_number)
VALUES (?, ?, ?);`;


DB.query(insert_query, [first_name, last_name, phone_number] , (err,result,field) => {
    if (err) console.log(err);
    else console.log(result);
});

    res.send("your data is received and saved on database");






});




server.listen(3000,() => {

    console.log("listening on http://localhost:3000/")

});
