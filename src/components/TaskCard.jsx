import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedData } from "../redux/slices/taskSlice";

function TaskCard({ task }) {

  const selectedTask = useSelector((state) => state?.task?.selectedData)

  const dispatch = useDispatch()

  const handleSelect = (task) => {
    if (selectedTask?.id === task?.id) {
      dispatch(setSelectedData(null));
    } else {
      dispatch(setSelectedData(task));
    }
  }

  return (
    <div
      className={`flex items-center gap-4 relative w-full `}
      key={task._id}
      onClick={() => handleSelect(task)}
    >
      <div
        className={`flex-grow p-3 min-w-0 rounded-lg border overflow-x-scroll ${
          selectedTask?.id === task?.id
            ? "border-[#f5bd6c] shadow-lg"
            : "border-[#edeff3]"
        }`}
      >
        <div className="flex gap-4 w-full items-center  ">
          <picture className="min-w-[40px] h-10 text-xl rounded-xl flex items-center justify-center bg-[#ffffff] l">
            {task.icon}
          </picture>

          <h1 className="font-medium w-max md:text-lg ">
            {task.title?.slice(0, 20)}
          </h1>
         <div className="w-full p-2 flex items-center justify-end ">{task?.currentTime}</div>
        </div>

        <div className="pl-[60px] text-xs">
          {task.description?.map((detail, index) => (
            <li
              className={detail ? (index < 1 ? "list-none" : "list-disc") : ""}
              key={index}
            >
              {detail || ""}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
