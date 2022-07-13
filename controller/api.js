var student = require('../models/student')

exports.createStudent = async (req, res) => {
    var studentName = req.body.name
    var roll = req.body.roll
    var present = req.body.present

    await student.create({
        name: studentName,
        roll: roll,
        present: present
    }).then((data) => {
        console.log("data", data)
        return res.json(data, 'User created successfully')
    }).catch((err) => {
        console.log(err)
        return res.json(err)
    })
}

exports.getStudentlist = async (req, res) => {
    await student.find().then((data) => {
        console.log(data)
        return res.json(data)
    }).catch((err) => {
        console.log(err)
        return res.json(err)
    })
}

exports.updateDetail = async (req, res) => {
    const id = req.body.id;
    await student.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true })
    .then((data) =>{
        return res.status(200).json({message:'Updated successfully',data})
    }).catch((err)=>{
        console.log(err)
        return res.status(400).json(err)
    })
};

exports.removeStudent = (req, res) => {
    const id = req.body.id;
    student.findOneAndDelete({ _id: id })
    .then((data) => {
        console.log(data)
        return res.json({message:'Deleted successfully',data})
    }).catch((err) => {
        console.log()
        return res.json(err)
    })
}

