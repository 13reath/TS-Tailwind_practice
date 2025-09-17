import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { dummyData } from './data/todos';
import TodoForm from './components/TodoForm';

function App() {
    const [todos, setTodos] = useState(dummyData);
    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    }

    function addTodo(title: string) {
    }

    return (
        <main className="py-10  min-h-screen space-y-5">
            <h1 className="font-bold text-3xl text-center p-4">
                Todo
            </h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
                <TodoForm onSubmit={addTodo}/>
                <div className="space-y-2">
                    {todos.map((todo) => (
                        <p key={todo.id} className="text-lg">
                            <TodoItem
                                todo={todo}
                                onCompletedChange={setTodoCompleted}
                            />
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default App;
