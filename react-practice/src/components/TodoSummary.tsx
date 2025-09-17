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
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllcompleted}
                    className="text-red-500 hover:underline text-sm font-medium"
                >
                    Deleted all
                </button>
            )}
        </div>
    );
}
