import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTask as getTask } from "../tasks.api";
import Link from "next/link";
import {buttonVariants} from '@/components/ui/button'

interface Props {
    params: {
        id: string;
    };
}

async function TaskDetailPage({ params }: Props) {
  const task = await getTask(params.id);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <Card className="max-w-md w-full shadow-lg rounded-lg border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="text-lg font-bold text-gray-800">
              Task Detail: {task.id}
            </span>
            <Link className={buttonVariants()} href="/">
              Go back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <h1 className="text-2xl font-semibold text-gray-900">{task.title}</h1>
          <p className="mt-2 text-gray-700">{task.text}</p>
          <p className="mt-2 text-gray-500">Status: {task.status}</p>
        </CardContent>
      </Card>
    </div>
  );
  
}

export default TaskDetailPage;
