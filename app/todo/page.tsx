"use client"

import TodoCard from "@/components/TodoCard"
import { useState, useEffect } from "react"
import Image from "next/image"
import girlImage from "@/public/images/girl.jpg"

interface Todo { 
  userId: number
  id: number
  title: string
  completed: boolean
}

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    function getTodos() { 
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data.slice(0, 5))) // limit to first 5 todos
        .catch((error) => console.error(error))
    }

    getTodos()
  }, [])
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard userId={todo.userId} id={todo.id} title={todo.title} completed={todo.completed}/>
      ))}
      <button onClick={() => console.log(todos)}>CHECK TODOS</button>
      <Image src={girlImage} alt="girl_image"
      width={300}
      height={400}
      quality={100}
      />
      
    </div>
  )
}
export default TodoPage
