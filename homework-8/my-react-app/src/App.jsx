
import './App.css'
import AddToDo from './components/addTodo'
import ToDoList from './components/TodoList'
import ToDoProvider from './context/ToDoContext'


function App() {
  

  return (
    <ToDoProvider>
      <div className='container'>
        <h1>MY TODO LIST</h1>
        <AddToDo/>
        <ToDoList/>
      </div>
    </ToDoProvider>
  )
}

export default App
