var express = require("express"),
	app     = express();

app
	.get("/",function(req,res){
		res.sendfile("index.html");
	})
	.listen(3000);