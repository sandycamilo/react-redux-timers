// used to create a value that will be available across multiple renders of this component
import React, { useState } from 'react'
// access to the Redux store to allow component to send actions when updating store
import { useDispatch } from 'react-redux'
import { addTimer } from '../actions'
import './NewTimer.css'

export default function NewTimer() {
  const [ name, setName ] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="NewTimer">
      <input
        type='text'
        placeholder='new timer name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <button
        onClick={() => dispatch(addTimer(name))}
      >save</button>
    </div>
  )
}