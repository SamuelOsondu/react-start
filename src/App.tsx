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
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
