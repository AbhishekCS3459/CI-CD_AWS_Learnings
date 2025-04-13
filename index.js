const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()



app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello From Server!')
})
app.post('/api', (req, res) => {
    const { name, email, message } = req.body
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)
    res.status(200).json({ message: 'Data received successfully' })
}
)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}
)

module.exports = app