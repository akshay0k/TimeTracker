import { useState, useCallback } from "react";
import Addform from "./Addform";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TaskListComponent = () => {
  const [showForm, setShowForm] = useState(false);

  const listData = useSelector(state=> state?.task?.listData)

  const today = new Date();


  const formatedDate = today.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
  });

  const handleAdd = useCallback(() => {
    setShowForm((prev)=>!prev)
  }, []);


  return (
    <section className="w-full md:min-w-[calc(100vw-55vw)] pt-5 xl:p-14 text-[#47425b] md:order-2">
      <main className="flex min-w-max px-5 mb-12 relative">
        <header className="w-full">
          <h1 className="text-3xl leading-[60px] tracking-normal md:text-2xl lg:text-4xl">
            Today's schedule
          </h1>
          <aside className="flex items-center gap-4  mt-3">
            {/* show selected Date */}
            <h1 className="text-3xl leading-[50px] tracking-wide text-[#f5bd6c] md:text-2xl lg:text-4xl w-52 lg:w-64">
              {formatedDate}
            </h1>
          </aside>
        </header>
        <button
          className="w-14 h-14 logobox text-2xl font-extrabold flex items-center justify-center cursor-pointer select-none active:bg-[#fcc22f] bg-[#f7d57e] text-white md:w-10 md:h-10 md:text-xl lg:text-2xl lg:w-14 lg:h-14"
          onClick={handleAdd}
        >
          ＋
        </button>
        <div
          className={`${
            showForm
              ? "opacity-100 right-0 transition-all duration-1000"
              : "hidden right-[-100px] transition-all duration-1000"
          } absolute z-50 top-24 shadow-lg shadow-[#3454742a]`}
        >
          <Addform setShowForm={setShowForm} />
        </div>
      </main>

      <main className="h-[calc(100vh-24vh)] rounded-xl flex flex-col gap-3 overflow-y-scroll p-5 relative ">
        {listData?.map((task,index) => (
          <TaskCard key={index*17} task={task}  />
        ))}
      </main>
    </section>
  );
};

export default TaskListComponent;
