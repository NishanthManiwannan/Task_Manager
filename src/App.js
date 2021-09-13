import Header from './components/Header';
import Task from './components/Task';

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Task/>
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
