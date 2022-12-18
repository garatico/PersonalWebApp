// SYNTAX = Common Module JS :: Used in backend
// import module = ES2015 :: Used in frontend

// response.send('Get goals')          // Send a single string of text

const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)
// ABOVE + BELOW EQUIVALENT

//router.get('/', getGoals)
//router.post('/', setGoals)
//router.put('/:id', updateGoals)
//router.delete('/:id', deleteGoals)

// Exports API routs that can be used in server.js
module.exports = router