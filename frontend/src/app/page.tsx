import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getTasks } from "./tasks/tasks.api";
import { TaskCard } from "@/components/task-card";

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await getTasks();

  const todoTasks = tasks.filter((task: any) => task.status === "todo");
  const inProgressTasks = tasks.filter((task: any) => task.status === "in-progress");
  const doneTasks = tasks.filter((task: any) => task.status === "done");

  return (
<>
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-4xl font-bold text-gray-800">To-do App</h1>
    <Link href="/tasks/new" className={`${buttonVariants()} bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200`}>
      Create Task
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">To Do</h2>
      <div className="space-y-4">
        {todoTasks.length > 0 ? (
          todoTasks.map((task: any) => <TaskCard task={task} key={task.id} />)
        ) : (
          <p className="text-gray-500">No tasks in To Do</p>
        )}
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">In Progress</h2>
      <div className="space-y-4">
        {inProgressTasks.length > 0 ? (
          inProgressTasks.map((task: any) => <TaskCard task={task} key={task.id} />)
        ) : (
          <p className="text-gray-500">No tasks In Progress</p>
        )}
      </div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Done</h2>
      <div className="space-y-4">
        {doneTasks.length > 0 ? (
          doneTasks.map((task: any) => <TaskCard task={task} key={task.id} />)
        ) : (
          <p className="text-gray-500">No tasks Done</p>
        )}
      </div>
    </div>
  </div>
</>
  
  );
}

export default HomePage;
