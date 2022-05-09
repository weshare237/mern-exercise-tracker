const express = require('express')
const router = express.Router()

const {
  createExercise,
  getAllExercises,
  updateExercise,
  deleteExercise,
  getSingleExercise,
} = require('../controllers/exercises')

router.route('/add').post(createExercise)
router.route('/').get(getAllExercises)
router.route('/delete/:id').delete(deleteExercise)
router.route('/update/:id').patch(updateExercise)
router.route('/:id').get(getSingleExercise)

module.exports = router
