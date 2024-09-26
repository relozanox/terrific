import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskForm } from "./task-form";
import { getTask } from "../../tasks/tasks.api";

interface Props {
  params: {
    id: string;
  };
}

async function TasksNewPage({params}: Props) {
  const task = await getTask(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {params.id ? "Edit Task" : "Create Task"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TaskForm task={task} />
        </CardContent>
      </Card>
    </div>
  );
}
export default TasksNewPage;
