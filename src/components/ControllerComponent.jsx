import Timer from "./Timer";
import { useSelector } from "react-redux";

const ControllerComponent = () => {
  const selectedTask = useSelector((state) => state?.task?.selectedData);

  return (
    <section className="w-full md:min-w-[calc(100vw-70vw)] max-h-screen p-5 xl:p-14 bg-[#e7f0fa] text-[#47425b] md:order-1 duration-1000 relative">
      <header className="flex gap-4 items-center 2xl:gap-10">
        <span className="w-10 h-10 logobox text-lg font-extrabold flex items-center justify-center bg-[#f7d57e] text-white md:w-8 md:h-8 md:text-base lg:w-10 lg:h-10 lg:text-lg ">
          ＋
        </span>
        <h1 className="font-semibold text-xl md:text-base lg:text-xl css-1t1abw3 animate-charcter">
          Time Tracker
        </h1>
      </header>
      {selectedTask ? (
        <>
          <Timer />
          <div className="h-[calc(100%-38%)]">
            <header>
              <h1 className="text-2xl p-2">History</h1>
            </header>
            <div className="p-2 h-full overflow-y-scroll">        
       
              <div
                className={`flex-grow p-3 min-w-0 rounded-lg border overflow-x-scroll border-[#f5bd6c] shadow-lg`}
              >
                <div className="flex gap-4 w-full items-center  ">
                  <picture className="min-w-[40px] h-10 text-xl rounded-xl flex items-center justify-center bg-[#ffffff] l">
                    {selectedTask.icon}
                  </picture>

                  <h1 className="font-medium w-max md:text-lg ">
                  {selectedTask.title?.slice(0, 20)}
                  </h1>
                  <h1 className="font-medium w-max md:text-lg ">
                  totalTimeSpend
                  </h1>
                  <h1>{selectedTask.totalTimeSpend}</h1>
                </div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <main className="w-full h-full flex justify-center items-center">
          <h1 className="text-2xl">No task Selected</h1>
        </main>
      )}
    </section>
  );
};

export default ControllerComponent;
