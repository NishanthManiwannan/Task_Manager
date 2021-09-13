import React from 'react'
// import { useState } from 'react'
import Task from './Task'

const Tasks = ({ task, onDelete }) => {

  // const [task, useTask] = useState([
  //     {
  //         id : '1',
  //         text : 'Doc Appointment',
  //         day : 'Feb 5th at 2.30pm',
  //         reminder : true
  //     }
  // ] )


  return (
    <>
      {/* {task.map((task) => (
                <h3 key={task.id}>{task.text}</h3>  
          ))}   */}

      {task.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Tasks
