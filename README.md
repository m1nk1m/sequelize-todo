# SequelizeJS and ExpressJS Todo API

#### How to run
1. run ```npm install```
2. make a copy of .env.sample file and name it as .env
3. put the right config values for env variables (must do to run the server)
4. make sure all the dev dependencies are installed
5. ```npm start```

run ```npm migrate``` will create a table required to run this application if it does not exist. 

### How to test
1. Make sure the app is runnable first
2. run ```npm test```

## Reference
1. Example provided from sequelize with express using express-boilder template and sequelize-cli generated models. However, there are some parts that are different, including models, config using dotenv and unit testing
https://github.com/sequelize/express-example