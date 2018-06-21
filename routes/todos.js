const models = require('../models'),
  router = require('express').Router();

module.exports = () => {
  const getTodos = async (req, res) => {
    try {
      const todos = await models.Todo.findAll();
      res.json({
        success: true,
        payload: todos
      });
    } catch(err) {
      res.json({
        success: true,
        payload: err
      });
    }
  };


  const postTodo = async (req, res) => {
    try {
      const todo = await models.Todo.create({
        body: req.body.body,
        complete: 0,
        created: new Date()
      });

      res.json({
        success: true,
        payload: todo
      });
    } catch (err) {
      res.json({
        success: true,
        payload: err
      });
    }
  };

  // check this part
  const deleteTodo = async (req, res) => {
    try {
      const isDeleted = await models.Todo.destroy({
        where: { id: req.params.id }
      });
      
      if (isDeleted) {
        res.json({ 
          success: true, 
          payload: { id: req.params.id} 
        });
      } else {
        throw new TypeError("somethign went wrong");
      }
    } catch (err) {
      res.json({ 
        success: true, 
        payload: err 
      });
    }
  };

  return router
    .get('/', getTodos)
    .post('/', postTodo)
    .delete('/:id', deleteTodo);
}