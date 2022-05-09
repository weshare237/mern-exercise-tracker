const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    desciption: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Excercise', ExerciseSchema)
