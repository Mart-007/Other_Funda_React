//components and props
import React from 'react';
import State from './components/State';
import Toggle from './components/Toggle'
import './App.css';

const users = [
  {id : 1, name: 'Mart', age: '100'},
  {id : 2, name: 'Kei', age: '22'},
  {id : 3, name: 'Michael', age: '40'},
  {id : 4, name: 'John', age: '35'}
]

const App = () => {
  return(
    <>
      <Toggle />
      <State />
      <div>
        {users.map(user => <Welcome key={user.id} name={user.name} age={user.age} />)}
      </div>
      
    </>
  )
}
function Welcome(props) {
  return (
    <>
      <div className="App">
        <h3>I'm {props.name}  {props.age} years old </h3>
      </div>
    </>
  )
}
export default App;
