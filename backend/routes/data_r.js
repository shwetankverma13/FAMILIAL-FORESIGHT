const router = require('express').Router();
let Data = require('../models/data');

router.route('/').get((req, res) => {
    Data.find()
        .then(info => res.json(info))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const newData = new Data({ description });

    newData.save()
        .then(() => res.json('Entry added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;