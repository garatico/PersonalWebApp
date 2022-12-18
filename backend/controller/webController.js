// @desc      Get goals
// @route     GET /api/goals
// @access    Private
const getHome = (request, response) => {
    response.status(200).json({ "protocol" : "get",
                                 "CRUD" : "READ" })
}


module.exports = {
    getHome
}