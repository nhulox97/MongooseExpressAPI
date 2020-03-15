# MongooseExpressAPI

This projects contains the basic structure that you would need when you want to 
develop an API with [nodejs](https://nodejs.org/) and [mongoDB](https://www.mongodb.com/). It's a good "start line" that will give you what you would need 
for create your own API. 

## Getting Started

### Prerequisites

You must clone this repository in your computer executing the following command line.

```
git clone https://github.com/nhulox97/MongooseExpressAPI.git
```

#### Project structure
                       
    ├── src
        ├── config
            ├── database.js
            ├── routes.js
        ├── controllers
            ├── todos.js
        ├── models
            ├── todos.js
        app.js
        index.js                     
    ├── test
        ├── todos.js
    ├── .babelrc
    ├── LICENSE.md
    ├── package-lock.json
    ├── package.json                    
    └── README.md


### Installing

Once you clone the repository, you need execute the following command, for install all dependencies

```
npm install
```

Now you must be able to run the API in your localhost, by executing the following command. 

```
npm start
```
or 

```
yarn start
```

## Running the tests

Into [test/todos.js](test/todos.js) you will find some important instructions that you will need for be able to execute the tests. 

### Break down into end to end tests

This will test the endpoints of the API.

```
npm test
```

or

```
yarn test
```

## Deployment

If you want to deploy your API, see this [documentation](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment) about it.

## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Babel](https://babeljs.io/) - Babel is a JavaScript compiler.
* [nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development of a node.js app.
* [mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.


## Authors

* **Sergio A. Bernal** - [nhulox97](https://github.com/nhulox97)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
