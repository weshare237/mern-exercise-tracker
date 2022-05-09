const User = require('../models/User')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createUser = async (req, res) => {
  try {
    const username = req.body.username
    const user = await User.create({ username })
    res.status(201).json({ msg: 'User create successfully' })
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllUsers,
  createUser,
}
