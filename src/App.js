import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import CreateExercise from './components/CreateExercise'
import EditExercise from './components/EditExercise'
import CreateUser from './components/CreateUser'
import ExerciseList from './components/ExerciseList'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<ExerciseList />} />
        <Route path='/add' element={<CreateExercise />} />
        <Route path='/edit/:id' element={<EditExercise />} />
        <Route path='/user' element={<CreateUser />} />
      </Routes>
    </div>
  )
}

export default App
