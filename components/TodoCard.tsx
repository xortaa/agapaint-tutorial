function TodoCard({userId, id, title, completed}: {userId: number, id: number, title: string, completed: boolean}) {
  return (
    <div style={{backgroundColor: "white", border: "2px solid black", width: "30vw", display: "flex", flexDirection: "column"}}>
      <i>userid: {userId}</i>
      <i>id: {id}</i>
      <b>title: {title}</b>
      <p>{completed ? "completed": "not completed"}</p>
    </div>
  )
}
export default TodoCard