// @desc      Get goals
// @route     GET /api/goals
// @access    Private
const getGoals = (request, response) => {
    response.status(200).json({ "protocol" : "get",
                                 "CRUD" : "READ" })
}

// @desc      Set goals
// @route     POST /api/goals
// @access    Private
const setGoals = (request, response) => {
    response.status(200).json({ "protocol" : "post",
                                 "CRUD" : "Create" })
}

// @desc      Update goals
// @route     PUT /api/goals
// @access    Private
const updateGoals = (request, response) => {
    response.status(200).json({ "protocol" : "put",
                                 "CRUD" : "Update",
                                 "params" : `id : ${request.params.id}` })
}

// @desc      Delete goals
// @route     DELETE /api/goals
// @access    Private
const deleteGoals = (request, response) => {
    response.status(200).json({ "protocol" : "delete",
                                 "CRUD" : "Delete",
                                 "params" : `id : ${request.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}