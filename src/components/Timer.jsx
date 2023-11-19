import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { resetSelectedData, setListData } from "../redux/slices/taskSlice";

function Timer() {
  const [timerCount, setTimerCount] = useState(0);
  const [timerPlay, setTimerPlay] = useState(false);

  const selectedTask = useSelector((state) => state?.task?.selectedData);

  const taskList = useSelector((state) => state?.task?.listData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTask?.totalTimeSpend) {
      setTimerCount(selectedTask?.totalTimeSpend);
    } else {
      setTimerCount(0);
    }
  }, [selectedTask]);

  useEffect(() => {
    let intervalId;

    if (timerPlay) {
      intervalId = setInterval(() => {
        setTimerCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerPlay]);

  const formatTime = (number) => (number < 10 ? "0" + number : number);

  const handlePlay = () => {
    setTimerPlay((prev) => !prev);
  };

  const handleSave = () => {
    setTimerPlay(false);

    console.log("taskList", taskList);

    let editedData = taskList.map((item) =>
      item.id === selectedTask?.id
        ? { ...item, totalTimeSpend: timerCount }
        : item
    );
    console.log("editedData", editedData);

    dispatch(setListData(editedData));

    setTimerCount(0);
    dispatch(resetSelectedData());
  };

  return (
    <div className="">
      <div className="bg-gray-200 p-8 rounded-2xl border-2 shadow-lg mt-5 relative">
        <div className="flex justify-between text-4xl">
          <div className="w-14">{formatTime(Math.floor(timerCount / 3600))}</div>
          <div className="w-14">:</div>
          <div className="w-14">{formatTime(Math.floor((timerCount % 3600) / 60))}</div>
          <div className="w-14">:</div>
          <div className="w-14">{formatTime(timerCount % 60)}</div>
        </div>
        <div className="text-center mt-4">
          <span className="text-gray-500">HH</span>
          <span className="mx-2">:</span>
          <span className="text-gray-500">MM</span>
          <span className="mx-2">:</span>
          <span className="text-gray-500">SS</span>
        </div>

        <div
          className="absolute right-4 bottom-2 rounded-full"
          onClick={() => handlePlay()}
        >
          {!timerPlay ? (
            <span className="material-symbols-outlined rounded-full bg-[#37ce3287] text-white">play_arrow</span>
          ) : (
            <span className="material-symbols-outlined rounded-full bg-[#f234348c]  text-white">pause</span>
          )}
        </div>
      </div>
      <div className="w-full p-5 flex justify-center ">
        <button
          className="bg-yellow-500 text-white shadow-lg px-10 rounded-lg py-1 "
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Timer;
