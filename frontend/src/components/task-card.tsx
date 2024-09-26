"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteTask } from "@/app/tasks/tasks.api";
import { useRouter } from "next/navigation";

export function TaskCard({ task }: any) {
  const router = useRouter();

  async function handleRemoveTask(id: string) {
    await deleteTask(id);
    router.refresh();
  }

  return (
    <Card
    onClick={() => {
      router.push(`/tasks/${task.id}`);
    }}
    className="hover:shadow-lg transition-shadow duration-200 cursor-pointer rounded-lg border border-gray-200 bg-white shadow-md p-6"
  >
    <CardHeader>
      <CardTitle className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">
          {task?.title}
        </span>
        <span className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleDateString()}</span> {/* Fecha de creación */}
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-3">
      <p className="text-gray-700">{task?.text}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center mt-5">
      <Button
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow"
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/tasks/${task.id}/edit`);
        }}
      >
        Update
      </Button>
      <Button
        className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200 shadow"
        variant="destructive"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveTask(task.id);
        }}
      >
        Delete
      </Button>
    </CardFooter>
  </Card>
  

  );
}
