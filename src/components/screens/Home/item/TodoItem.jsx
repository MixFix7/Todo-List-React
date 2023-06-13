import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'


const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div
     className='flex items-center justify-between mb-4 rounded-2xl
     bg-zinc-800 p-5 w-full' 
    >

    <button onClick={() => changeTodo(todo._id)}
     className='flex items-center'>
      <Check isCompleted={todo.isComleted} />
        <span 
          className={cn({
            'line-through': todo.isComleted
          })}
      >
        {todo.title}
        </span>
    </button>

    <button onClick={() => removeTodo(todo._id)}>

      <BsTrash 
        size={22} className='text-gray-600 hover:text-red-700 
        transition-colors ease-in-out' 
        />
      </button>

    </div>
  )
}

export default TodoItem

