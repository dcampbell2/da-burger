const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "camcam24",
    database: "burgers_db"
})

connection.connect((err)=>{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId)
})