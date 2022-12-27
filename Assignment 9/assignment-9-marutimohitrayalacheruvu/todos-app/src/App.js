import './App.scss';
import React from 'react';
import Title from './Title/Title';
import Todos from './Todos/Todos';
import AddTodo from './AddTodo/AddTodo';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoDetail from './Todo-Detail/Todo-Detail';

class App extends React.Component {
  // returns html consisting of all app components
  render(){
    return (
      <div>
        <Title></Title>
        <Todos></Todos>
        <AddTodo></AddTodo>
        <AddTodoForm></AddTodoForm>
        <TodoDetail></TodoDetail>
      </div>
    );
  }
}

export default App;
