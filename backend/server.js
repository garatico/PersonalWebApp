console.log('SERVER js REACHED')

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000       // From .env file, if 8000 is logged, then it's from here

const app = express()
app.use('/', require('./routes/webRoutes'))

// app.get('/api/goals/', (request, response) => {
//     // response.send('Get goals')          // Send a single string of text
//     response.json({ "key" : "value" })
// })

app.listen(port, () => console.log(`Server started on port ${port}`))



