import express from 'express'
import dotenv from 'dotenv'
import { MongoClient, ObjectId } from 'mongodb'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'passop';
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

await client.connect();
const db = client.db(dbName);

// Get all passwords
app.get('/', async (req, res) => {
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// Save a password
app.post('/api', async (req, res) => {
    const password = req.body
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult })
})

// Delete a password by id
app.delete('/api/:id', async (req, res) => {
    const id = req.params.id
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne({ _id: new ObjectId(id) });
    res.send({ success: true, result: findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})