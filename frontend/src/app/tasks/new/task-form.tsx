"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createTask, updateTask } from "../tasks.api";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

export function TaskForm({ task }: any) {
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      title: task?.title,
      text: task?.text,
      status: task?.status || "todo",
    },
  });

  const router = useRouter();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (task?.status) {
      setValue("status", task.status);
    }
  }, [task, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    console.log("Form Data:", data);
    if (params?.id) {
      await updateTask(params.id, data);
    } else {
      await createTask(data);
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form 
    onSubmit={onSubmit} 
    className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
  >
    <div>
      <Label className="block text-gray-700 font-semibold mb-2">Task Title</Label>
      <Input 
        {...register("title", { required: true })} 
        className={`w-full border rounded-lg p-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
    </div>
  
    <div>
      <Label className="block text-gray-700 font-semibold mb-2">Text</Label>
      <Input 
        {...register("text", { required: true })} 
        className={`w-full border rounded-lg p-2 ${errors.text ? "border-red-500" : "border-gray-300"}`}
      />
      {errors.text && <p className="text-red-500 text-sm mt-1">Text is required</p>}
    </div>
  
    <div>
      <Label className="block text-gray-700 font-semibold mb-2">Status</Label>
      <Select
        onValueChange={(value) => setValue("status", value)} 
        defaultValue={getValues("status")}
        className="w-full"
      >
        <SelectTrigger className="border rounded-lg p-2">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todo">To do</SelectItem>
          <SelectItem value="in-progress">In progress</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectContent>
      </Select>
      {errors.status && <p className="text-red-500 text-sm mt-1">Status is required</p>}
    </div>
  
    <Button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
      {params.id ? "Update Task" : "Create Task"}
    </Button>
  </form>
  
  );
}
