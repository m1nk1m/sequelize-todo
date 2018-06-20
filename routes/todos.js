var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', (req, res) => {
  models.Todo.findAll().then(todos => {
    res.json({
      success:true,
      payload: todos
    });
  });
});


router.post('/', (req, res) => {
  models.Todo.create({
    body: req.body.body,
    complete: 0,
    created: new Date() 
  }).then(todo => {
    res.json({
      success: true,
      payload: todo
    });
  });
});

router.delete('/:id/', function (req, res) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    res.json({ success: Boolean(result) });
  });
});

module.exports = router;
