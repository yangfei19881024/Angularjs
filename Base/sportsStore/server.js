var express = require("express"),
	app		= express();

app
	.get("*",function(req,res){
		res.sendfile("app.html");
	})
	.listen(3000);