import TodoItem from './TodoItem';
import type { Todo } from '../types/todo';

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoList({
    todos,
    onDelete,
    onCompletedChange,
}: TodoListProps) {
    const todoSorted = [...todos].sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <div className="space-y-2">
            {todoSorted.map((todo) => (
                <p key={todo.id} className="text-lg">
                    <TodoItem
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                    />
                </p>
            ))}
        </div>
    );
}
