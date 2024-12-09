import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10">
      <h1>
        Your TODOS!
      </h1>
      <div>
        <div>
          {dummyData.map(todo => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
