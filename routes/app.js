var express = require('express');
var router = express.Router();
var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) {
            return res.status(500).json({
                user : 'Error while fetching data'
            });
        }

        res.status(201).json({
            data : users
        });
    });
});

router.post('/user', function (req, res, next) {
    var user = new User({
        mail : req.body.mail,
        password : req.body.password,
        name : req.body.name
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message : 'Error while saving data'
            });
        }
        res.status(201).json({
            message: 'Saved data successfully',
            id : user._id
        });
        return user._id;
    });
});

router.get('/messages', function(req, res, next) {
    Message.find(function(err, messages) {
        if (err) {
            return res.status(500).json({
               message : 'Error while fetching data'
            });
        }

        res.status(201).json({
            data : messages
        });
    });
});

router.delete('/users/delete/:id', function(req, res, next) {
    User.findByIdAndRemove(req.params.id , function(err, user) {
        if (err) {
            return res.status(500).json({
                message : 'Error while finding user with id :' + req.params.id
            });
        }

        res.status(201).json({
            message: 'User removed successfully'
        });
    });
});

router.delete('/messages/delete/:id', function(req, res, next) {
    Message.findByIdAndRemove(req.params.id , function(err, message) {
        if (err) {
            return res.status(500).json({
                message : 'Error while finding message with id :' + req.params.id
            });
        }

        res.status(201).json({
            message: 'Message removed successfully'
        });
    });
});

router.post('/message', function (req, res, next) {
    var message = new Message({
        content : req.body.content
    });

    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message : 'Error while saving data'
            });
        }
        res.status(201).json({
            message: 'Saved data successfully',
            id : message._id
        });
        return message._id;
    });
});

module.exports = router;
