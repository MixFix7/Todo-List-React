import React, { useState } from 'react'

const CreateTodoField = ({addTodo}) => {
    const[title, setTitle] = useState('')

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl
    bg-zinc-800 p-5 w-full'>
      <input 
        type="text" 
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none
        outline-none'
    />
    </div>
  )
}

export default CreateTodoField
