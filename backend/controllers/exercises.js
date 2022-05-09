const Exercise = require('../models/Exercise')

const createExercise = async (req, res) => {
  try {
    const newExercise = {
      ...req.body,
      duration: Number(req.body.duration),
    }
    const exercise = await Exercise.create(newExercise)
    res.status(201).json({ msg: 'Exercise added successfully' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({})
    res.status(200).json(exercises)
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOneAndDelete({ _id: req.params.id })
    res.status(200).json({ msg: 'Exercise deleted successfully' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateExercise = async (req, res) => {
  try {
    const newExercise = { ...req.body, duration: Number(req.body.duration) }
    const exercise = await Exercise.findOneAndUpdate(
      { _id: req.params.id },
      newExercise,
      {
        runValidators: true,
      }
    )
    res.status(200).json({ msg: 'Exercise updated successfully' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const getSingleExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({ _id: req.params.id })
    res.status(200).json(exercise)
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  createExercise,
  getAllExercises,
  deleteExercise,
  updateExercise,
  getSingleExercise,
}
