import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Exercise = ({
  username,
  description,
  duration,
  date,
  _id,
  deleteExercise,
}) => (
  <tr>
    <td>{username}</td>
    <td>{description}</td>
    <td>{duration}</td>
    <td>{date.substring(0, 10)}</td>
    <td>
      <Link to={'/edit/' + _id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          deleteExercise(_id)
        }}
      >
        delete
      </a>
    </td>
  </tr>
)

export default class ExerciseList extends Component {
  constructor(props) {
    super(props)

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/exercises')
      .then((res) =>
        this.setState({
          exercises: res.data,
        })
      )
      .catch((err) => console.log(err))
  }

  deleteExercise(exerciseID) {
    axios
      .delete(`http://localhost:5000/exercises/delete/${exerciseID}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          exercises: this.state.exercises.filter(
            (exercise) => exercise._id !== exerciseID
          ),
        })
      })
      .catch((err) => console.log(err))
  }

  exerciseList() {
    return this.state.exercises.map((exercise) => {
      return (
        <Exercise
          {...exercise}
          deleteExercise={this.deleteExercise}
          key={exercise._id}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Exercises</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    )
  }
}
