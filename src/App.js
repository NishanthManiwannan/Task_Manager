import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

const App = () => {

  const [task, setTasks] = useState([
    {
      id: '1',
      text: 'Doc Appointment',
      day: 'Feb 5th at 2.30 pm',
      reminder: true
    },
    {
      id: '2',
      text: 'School fee',
      day: 'Feb 10th at 8.30 am',
      reminder: true
    },
    {
      id: '3',
      text: 'futsal',
      day: 'Feb 18th at 7.30 pm',
      reminder: false
    },
    {
      id: '4',
      text: 'food',
      day: 'Feb 28th at 2.00 pm',
      reminder: true
    }
  ])

  //Delete task
  const deleteTask = (id) => {
    setTasks(task.filter((task) => task.id !== id))
  }

  //Reminder
  const toggleReminder = (id) => {
    setTasks(task.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {task.length > 0 ? (<Tasks task={task} onDelete={deleteTask} onToggle={toggleReminder} />) : ('Empty Tasks')}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }

// import React from 'react';

// class App extends React.Component{
//   render(){
//     return (
//       <h1>Hello class</h1>
//       )
//   }
// }

export default App;
