import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'
import faker from 'faker'

/*
    * ----------------------------- NOTE -----------------------------
    * You must need have created the collection 'todos' in your local or remote
    * mongodb. 
    * 
    * Before to run 'yarn test' or 'npm test' you'll need have one record
    * into your collection .
    * 
    * For can test routes that include the paramater 'todosId' you must have 
    * record some values into the collection (you'll can use the api for it) and also 
    * substitute the parameter 'todosId' for your own value from your records.  
*/

chai.use(chaiHttp);

describe('GET /api/todos', () => {
    it('should GET all todos', (done) => {
        chai.request(app)
            .get('/api/todos')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('object')
                done()
            })
    })
})

describe('POST /api/todos', () => {
    it('shoult POST a new todos', (done) => {
        let todos = {
            name: faker.lorem.word(),
            content: faker.lorem.words(15)
        }
        chai.request(app)
            .post('/api/todos')
            .send(todos)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('object')
                expect(res.body).have.property('todos').which.is.an('object')
                    .and.have.property('_id')
                done()
            })
    })
})

describe('GET /api/todos/:todosId', () => {
    it('should GET a todos', (done) => {
        chai.request(app)
            .get('/api/todos/<your_todosId>')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).have.property('todos').which.is.an('object')
                    .and.have.property('_id')
                done()
            })
    })
})

describe('PUT /api/todos/:todosId', () => {
    it('should PUT a todos', (done) => {
        let todos = {
            name: faker.lorem.word(),
            content: faker.lorem.words(15)
        }
        chai.request(app)
            .put('/api/todos/<your_todosId>')
            .send(todos)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).have.property('todos').which.is.an('object')
                    .and.have.property('_id')
                done()
            })
    })
})

describe('DELETE /api/todos/:todosId', () => {
    it('should DELETE a todos', (done) => {
        let todos = {
            name: faker.lorem.word(),
            content: faker.lorem.words(15)
        }
        chai.request(app)
            .delete('/api/todos/<your_todosId>')
            .send(todos)
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).have.property('todos').which.is.an('object')
                    .and.have.property('_id')
                done()
            })
    })
})