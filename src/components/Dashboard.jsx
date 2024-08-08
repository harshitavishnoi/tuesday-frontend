import { ChevronDown, List } from "lucide-react";
import { useState } from "react";
import Task from "./Task";
import TaskCard from "./TaskCard";

function Dashboard({ sidebarToggle, setSidebarToggle }) {
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (data) => {
    console.log(data);
    setTaskData(data);
  };

  return (
    <div
      className={`h-screen  ${
        open ? "bg-black bg-opacity-50" : "border-gray-400"
      }`}
    >
      <div className="flex">
        <button className="flex p-1 hover:bg-slate-300 hover:bg-opacity-30 rounded-md ">
          <List onClick={() => setSidebarToggle(!sidebarToggle)} />
        </button>
        <h1 className="flex justify-center items-center text-2xl font-bold">
          Task
        </h1>
      </div>
      <nav className={`${open ? "" : "border-t-2 border-b-2"}`}>
        <div className="flex p-2">
          <button
            onClick={handleOpen}
            type="submit"
            className={`${
              open
                ? ""
                : "bg-blue-500 border border-black p-1 text-white hover:bg-blue-800"
            }`}
          >
            New Task
          </button>
          <button
            className={`${
              open
                ? ""
                : "bg-blue-500 border border-black p-1 text-white hover:bg-blue-800"
            }`}
          >
            <ChevronDown />
          </button>
        </div>
      </nav>
      <dialog open={open} onClose={handleClose} className="bg-green-100 mt-100">
        <Task isOpen={open} onClose={handleClose} onSave={handleSave}></Task>
      </dialog>
      <div>
        <TaskCard taskData={taskData}/>
      </div>
    </div>
  );
}

export default Dashboard;

