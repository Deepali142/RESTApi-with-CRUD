const express = require('express');
const router = express.Router();
// router.use(express.json());

const {createStudent, getStudentlist , updateDetail ,removeStudent} = require("../controller/api");

router.post("/addStudent",createStudent)
router.get("/getStudent", getStudentlist)
router.put('/updateStudent', updateDetail)
router.delete('/deleteStudent', removeStudent)
    
module.exports = router;