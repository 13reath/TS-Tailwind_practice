import type { Todo } from '../types/todo';

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllcompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllcompleted,
}: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p>
                {completedTodos.length}/{todos.length} todos completed
            </p>
        </div>
    );
}
