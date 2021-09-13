import React from 'react'

const task = [
    {
        id : '1',
        text : 'Doc Appointment',
        day : 'Feb 5th at 2.30pm',
        reminder : true
    },
    {
        id : '2',
        text : 'School fee',
        day : 'Feb 10th at 8.30am',
        reminder : true
    },
    {
        id : '3',
        text : 'futsal',
        day : 'Feb 18th at 7.30pm',
        reminder : false
    }
] 

const Task = () => {
    return (
        <>
          {task.map((task) => (
                <h3>{task.text}</h3>  
          ))}  
        </>
    )
}

export default Task
