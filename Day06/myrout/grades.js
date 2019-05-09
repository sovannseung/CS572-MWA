const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

let grades = [];
let index = 0;

// Get all grades list
router.get('/', function(req, res, next){
    res.json(grades);
});

// Add 
router.post('/', [
    check('name', 'name is required').exists(),
    check('course', 'course is required').exists(),
    check('grade', 'grade is required').exists(),
    check('grade', 'grade is number').isNumeric()
],function(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }

    const gradenew = {
        id: index++,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    }

    grades.push(gradenew);

    res.status(201).json(gradenew);
});

// Update grade
router.put('/:id', [
    check('name','Name filed is required.').exists(),
    check('course','Course filed is required.').exists(),
    check('grade','Grade filed is required.').exists(),
    check('grade','Grade should be number.').isNumeric()
  ],function(req, res, next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }
  
    let existingGrade = grades.find(grade => grade.id == req.params.id);
  
    if(!existingGrade){
      return res.status(422).json({errors: [
        {
          msg: 'The given id does not exist'
        }
      ]});
    }
  
    const updatedGrade = {
      id: existingGrade.id,
      name: req.body.name,
      course: req.body.course,
      grade: req.body.grade
    };
  
    const indexOfGrade = grades.indexOf(existingGrade);
    grades[indexOfGrade]  = updatedGrade;
    res.status(202).json(updatedGrade);
  });

  // Delete grade
router.delete('/:id',function(req, res, next){
    let existingGrade = grades.find(grade => grade.id == req.params.id);
    
      if(!existingGrade){
        return res.status(422).json({errors: [
          {
            msg: 'The given id does not exist'
          }
        ]});
      }
  
      const newGrades = grades.filter(grade => grade.id != existingGrade.id);
      grades  = newGrades;
      res.status(200).json({ msg: 'The Grade deleted successfully.'});
  });


module.exports = router;