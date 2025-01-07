import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppdispatch, useAppSelector } from "@/redux/hook";
import { ITask } from "@/types";
import { Edit, Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppdispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id == task.assignedTo);

  return (
    <div className="border px-2 py-3 rounded-md mt-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority == "low",
              "bg-yellow-500": task.priority == "medium",
              "bg-red-500": task.priority == "high",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Edit />
          <Trash2
            className="text-red-500"
            onClick={() => dispatch(deleteTask(task.id))}
          />
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p>Assigned To - {assignedUser ? assignedUser.name : "No-One"}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
