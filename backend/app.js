const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/book.routes')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/books', router)

const connect = async () => {
    try {
      await  mongoose.connect(
            process.env.MONGO_CONNECT
            )
            console.log('Connected to MongoDB!');
    } catch (error) {
        throw(error);
    }
}

app.listen(5001, () => {
    console.log('Connected to backend!');
    connect()
})
