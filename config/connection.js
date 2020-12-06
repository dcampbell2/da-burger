const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "eag8sbuduodvi8t0",
        password: "q4xiccg8m06k9ql9",
        database: "mi4y4lpuc0jt0u5y"
    })
};

const NODE_MODULES_CACHE=false;

connection.connect((err)=>{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId)
});

module.exports = connection