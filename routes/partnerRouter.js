// TASK 3: Update the routers

const express = require('express');
const Partner = require('../models/partner');
// TODO: Import the model

const partnerRouter = express.Router();


partnerRouter.route('/')
.get((req, res, next) => {
    Partner.find()
    .then(partners => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partners);
    })
    .catch(err => next(err));
    // TODO: Use the model to fetch or find all partners documents
})
.post((req, res, next) => {
    Partner.create(req.body)
    .then(partner => {
        console.log('Partner Created ', partner);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
    // TODO: Use the model to create a partner document
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res, next) => {
    Partner.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
    // TODO: Use the model to delete all partners documents
});


partnerRouter.route('/:partnerId')
.get((req, res, next) => {
    Partner.findById(req.params.partnerId)
    .then(partner => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
    // TODO: Use the model to fetch the partner document with partnerId as the ID
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})
.put((req, res, next) => {
    Partner.findByIdAndUpdate(req.params.partnerId, {
        $set: req.body
    }, { new: true })
    .then(partner => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(partner);
    })
    .catch(err => next(err));
    // TODO: Use the model to update the partner document with partnerId as the ID
})
.delete((req, res, next) => {
    Partner.findByIdAndDelete(req.params.partnerId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
    // TODO: Use the model to delete the partner document with partnerId as the ID
});

module.exports = partnerRouter;