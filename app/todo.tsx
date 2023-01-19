"use client";
import { useRouter } from "next/navigation";
import { Button} from '@chakra-ui/react';

async function update(id, isDone, refresh) {
    await fetch(`/api/todo/update`, {
        method: "POST",
        body: JSON.stringify({ id, isDone })
    });
    refresh();
}

async function deleteTodo(id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: "DELETE",
    });
    refresh();
}

export default function Todo({ todo }) {
    const router = useRouter()
    return (
        <>
            <input type="checkbox"  onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
                checked={todo.isDone}
            />
            <span>{todo.name}</span>
            <Button ml={5} colorScheme='blue' onClick={() => deleteTodo(todo.id, router.refresh)}>Delete</Button>

        </>
    );
}
