const router = require('express').Router();

module.exports = () => {
  const gateAPI = (req, res) => {
    res.json({
      message: "Todo API with Sequelize demo"
    });
  };

  return router.get('/', gateAPI);
}
