/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    // Get all wallet
    getCreditUserInfo: function(req, res) {
        
        var ticket = req.body;

        tokenService.parse(req)

            .then(function(user) {
                return grossApiGameService.getBalance(user.username)
            })
            .then(function(results) {
                return res.json(results);
            })
    },

    // Update Password (only use for admin)
    updatePassword: function(req, res) {

        var ticket = requestService.only(['password'], req);

        Users.hashPassword(ticket.password)
            .then(function (hash) {
                return res.json(200, {hash: hash});
            })
    }
};
