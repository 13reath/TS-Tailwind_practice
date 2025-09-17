import { useState } from 'react';
import { dummyData } from './data/todos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
        setTodos((prevTodos) => [
            {
                id: prevTodos.length + 1,
                title,
                completed: false,
            },
            ...prevTodos,
        ]);
    }

    return (
        <main className="py-10  min-h-screen space-y-5">
            <h1 className="font-bold text-3xl text-center p-4">
                Todo
            </h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6">
                <TodoForm onSubmit={addTodo} />
                <TodoList
                    todos={todos}
                    onCompletedChange={setTodoCompleted}
                />
            </div>
        </main>
    );
}

export default App;
