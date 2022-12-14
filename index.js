const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.port || 5000
app.use(cors())

const category = require('./data/category.json')
const course = require('./data/Coures.json')

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/category', (req, res) => {
    res.send(category)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const coruseNumber = course.find(c => c.category_id == id)
    res.send(coruseNumber)
})
app.get('/allCourse', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log('server running');
})
module.exports = app