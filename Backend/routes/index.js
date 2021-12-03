var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User=require('../models/users')
var url="mongodb+srv://bachi:007@cluster0.bg3gb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

router.post('/register', function(req, res, next) {

	var newUser = new User({
		name:req.body.name,
		email: req.body.email,
		mobile: req.body.mobile,
		password:req.body.password,
		passwordConf:req.body.passwordConf,
		
	});

	newUser.save(function(err, result){
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "successfully registered",
				"data": result
			}
			res.json(data);
			res.status(200)
		}

	});

	});
	

	router.post('/login', function (req, res, next) {
		//console.log(req.body);
		var name = req.body.name;
		mongoose.connect(url, function (err, db) {
			if (err) throw err;
			var query = User.findOne({ name }).select('name email mobile password role');
			query.exec(function (err, data) {
	
				if (data) {
					if (data.password == req.body.password) {
						console.log("Done Login");
						res.send({ "Status": "Success!", 'data': data });
					} else {
						res.send({ "Status": "Wrong password!", 'data': data });
					}
				} else {
					res.send({ "Status": "This user Is not regestered!", 'data': data });
				}
				console.log(data);
			});
		});
	});
			
module.exports = router;