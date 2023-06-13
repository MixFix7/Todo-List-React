import React, { useState } from 'react'
import TodoItem from './item/TodoItem';

const data = [
  {
    _id: '1',
    title: 'Finish the essay collaboration',
    isComleted: false,
  },
  {
    _id: '2',
    title: 'Read next chapter of the book',
    isComleted: false,
  },
  {
    _id: '3',
    title: 'Complete react map of alarms in Ukraine',
    isComleted: false,
  },
  {
    _id: '4',
    title: 'Feed the cat',
    isComleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isComleted = !current.isComleted
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t._id !== id))
  }


  return (
    <div className='h-screen text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Todo for junior</h1>
    {todos.map(todo => (
      <TodoItem 
        key={todo._id} 
        todo={todo} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo}
        />
        
    ))}

    </div>
  
  )
};

export default Home
