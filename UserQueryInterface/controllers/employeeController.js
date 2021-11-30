const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/add", {
        viewTitle: "Add a new Query"
    });
});
router.post('/', (req, res) => {
    insertRecord(req, res);
});
function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.query = req.body.query;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('employee/list');
        else {
                console.log('Error during record insertion : ' + err);
        }
    });
}
router.get('/list', (req, res) => {
    res.render("employee/submitted", {
        viewTitle: "Query Submitted"
    });
});
router.get('/trends', (req, res) => {
    res.render("employee/trends", {
        viewTitle: "Existing Trends"
    });
});
module.exports = router;
