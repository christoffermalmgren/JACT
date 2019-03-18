const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient =require('mongodb').MongoClient
const objectId = require('mongodb').objectId

const PORT = process.env.PORT || 8080
const api = require('./routes/api')
const app = express()

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
  app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', api)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log('Server ready'))


