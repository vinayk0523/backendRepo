const express = require('express')
const app = express()
const router = require('./routes');
const conn = require('./db');
const cors = require('cors');


app.listen(5000,()=>{
    console.log("port started of backend")
})


app.use(express.json())
app.use(cors())


conn.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
      connection.release();
    }
  });


  app.use('/userr', router);
