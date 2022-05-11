import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class EditExercise extends Component {
  constructor(props) {
    super(props)

    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    })
  }

  onChangeUsers(e) {
    this.setState({
      users: e.target.value,
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    })
    console.log(this.props.match.params.id)
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/users')
      .then((res) =>
        this.setState({
          users: res.data,
        })
      )
      .catch((error) => console.log(error))

    // axios
    //   .get('http://localhost:5000/exercises/' + this.props.match.params.id)
    //   .then((res) =>
    //     this.setState({
    //       username: res.data.username,
    //       description: res.data.description,
    //       duration: res.data.duration,
    //       date: new Date(res.data.date),
    //     })
    //   )
    //   .catch((err) => console.log(err))
  }

  onSubmit(e) {
    e.preventDefault()

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }

    axios
      .patch(
        'http://localhost:5000/exercises/update' + this.props.match.params.id,
        exercise
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => console.log(error))

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                const { _id, username } = user
                return (
                  <option key={_id} value={username}>
                    {username}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Duration (in minutes): </label>
            <input
              type='number'
              className='form-control'
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <br />

          <div className='form-group'>
            <input
              type='submit'
              value='Edit Exercise'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    )
  }
}
