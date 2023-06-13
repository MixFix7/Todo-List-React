import React from 'react'
import TodoItem from './item/TodoItem';

const todos = [
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
    title: 'Give a food for cat',
    isComleted: false,
  },
]

const Home = () => {
  return (
    <div className='bg-gray-900 h-screen text-white' onChange={() => console.log('hello world')}>
      
    {todos.map(todo => (
      <TodoItem key={todo._id} todo={todo} />
    ))}

    </div>
  
  )
};

export default Home
