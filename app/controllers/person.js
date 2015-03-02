var personModel = require('../models/person'),
    _ = require('lodash'),
    logger = require('../utils/logger');

function PersonCtrl () {
    var me = this;

    me.list = function (req, res) {
        logger.info('Person::List');
        personModel.find({}, function (err, persons) {
            if (err) {
                logger.error(err);
                return res.status(500).send(err.toString());
            }

            persons.forEach(function (person, index) {
                persons[index] = person.toJSON();
            });

            res.json(persons);
        });
    };

    me.create = function (req, res) {
        logger.info('Person::Create');
        personModel.findOne({name: req.body.name, surname: req.body.surname, age: req.body.age}, function (err, person) {
            if (err) {
                logger.error(err);
                return res.status(500).send(err.toString());
            }

            if (!_.isEmpty(person)) return res.status(400).send('User with this data already exists');

            person = new personModel({
                name: req.body.name,
                surname: req.body.surname,
                age: req.body.age
            });

            person.save(function (err) {
                if (err) {
                    logger.error(err);
                    return res.status(500).send(err.toString());
                }

                res.json(person.toJSON());
            });
        });
    };

    me.single = function (req, res) {
        logger.info('Person::Single');
        personModel.findOne({'_id': req.params.personId}, function (err, person) {
            if (err) {
                logger.error(err);
                return res.status(500).send(err.toString());
            }

            if (_.isEmpty(person)) return res.status(404).send('Person not found');

            res.json(person.toJSON());
        });
    };

    me.update = function (req, res) {
        logger.info('Person::Update');
        personModel.findOne({'_id': req.params.personId}, function (err, person) {
            if (err) {
                logger.error(err);
                return res.status(500).send(err.toString());
            }

            if (_.isEmpty(person)) return res.status(404).send('Person not found');

            person.name = req.body.name || person.name;
            person.surname = req.body.surname || person.surname;
            person.age = req.body.age || person.age;

            person.save(function (err) {
                if (err) {
                    logger.error(err);
                    return res.status(500).send(err.toString());
                }

                res.json(person.toJSON());
            });
        });
    };

    me.remove = function (req, res) {
        logger.info('Person::Remove');
        personModel.findOne({'_id': req.params.personId}, function (err, person) {
            if (err) {
                logger.error(err);
                return res.status(500).send(err.toString());
            }

            if (_.isEmpty(person)) return res.status(404).send('Person not found');

            person.remove(function (err) {
                if (err) {
                    logger.error(err);
                    return res.status(500).send(err.toString());
                }

                res.end();
            });
        });
    };
}

module.exports = new PersonCtrl();