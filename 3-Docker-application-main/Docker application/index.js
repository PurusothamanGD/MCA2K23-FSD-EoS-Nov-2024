require("dotenv").config();
var express = require('express');
var app = express();
const mongoose = require("mongoose");
var url="mongodb://ENTER YOUR IP:27017";
app.use(express.urlencoded({ extended: true }));

const connectionParams = {
    dbName: `dockerdemo`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
try {
    mongoose.connect(url, connectionParams);
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}
const customerSchema = new mongoose.Schema({
	//write your code to define two fields 
    //name and email
});
const Customer = mongoose.model("customers", customerSchema);

app.get('/',function(req,res){
    res.send('Greetings from the server!');
})

app.get('/createMongo',function(req,res){ 
   //write your code here to write data into MongoDB
    
})

app.get('/readMongo', async function (req, res) {
    //write your code here to read data from MongoDB
    //use try catch block
  });

var port = 3000;
app.listen(port,function(){
    console.log('Listening on port: is'+ port);
});
