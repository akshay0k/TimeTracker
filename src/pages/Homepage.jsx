import TaskListComponent from "../components/TaskListComponent";
import ControllerComponent from "../components/ControllerComponent";
import { useState } from "react";

function Homepage() {

    const [listData, setListData] = useState([]);

    return (
      <div className="w-screen xl:h-screen md:flex overflow-hidden">
        <TaskListComponent listData={listData} setListData={setListData} />
        <ControllerComponent setListData={setListData} listData={listData} />
      </div>
    );
}

export default Homepage