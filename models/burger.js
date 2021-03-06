// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result) {
            cb(result);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(result) {
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;