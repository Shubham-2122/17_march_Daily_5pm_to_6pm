import React from 'react'
import CounterData from './features/counter/CounterData'
import Count1 from './features/counter/Count1'
import TodoList from './features/todo/TodoList'
import Addtodos from './features/todo/Addtodos'

function App() {
  return (
    <div>
      <h1>Helllo this App Component</h1>
      {/* <CounterData /> */}
      {/* <Count1 /> */}

      <Addtodos />
      <TodoList />
    </div>
  )
}

export default App
