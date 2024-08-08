import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

function Task({ isOpen, onClose, onSave }) {
  const [taskData, setTaskData] = useState({
    Title: "",
    Person: "",
    Status: "",
    Date: "",
  });

  if (!isOpen) return null;

  const options = ["Started", "Running", "Completed", "Doubt"];

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(taskData);
    onClose();
  };

  return (
    <>
      <div className=" border-2 h-fit w-fit m-auto px-5">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold p-2">New Task</h1>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className=" flex flex-col justify-center border-gray-500">
            <div className="">
              <label htmlFor="Title">Title:</label>
              <input
                type="text"
                name="Title"
                placeholder="title 1"
                value={taskData.Title}
                onChange={handleTaskChange}
                className="flex justify-center border border-gray-600 m-4 w-80 p-2 rounded-md"
              />
            </div>
            <div className="">
              <label htmlFor="Description">Description:</label>
              <input
                type="text"
                name="Person"
                placeholder="person 1"
                value={taskData.Person}
                onChange={handleTaskChange}
                className="flex justify-center border border-gray-600 m-4 w-80 p-2 rounded-md"
              />
            </div>
            <div className="">
              <label htmlFor="Status">Status:</label>
              <select
                onChange={handleTaskChange}
                name="Status"
                className="flex justify-center border border-gray-600 m-4 w-80 p-2 rounded-md"
              >
                <option value={taskData.Status}>---select---</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div className="">
              <label htmlFor="Date">Date:</label>
              <input
                type="date"
                name="Date"
                value={taskData.Date}
                min="2024-01-01"
                max="2024-12-30"
                onChange={handleTaskChange}
                className="flex justify-center border border-gray-600 m-4 w-80 p-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center items-center border-t-2 border-t-black border-opacity-40 p-5">
            <div className="flex justify-center p-2 mr-2">
              <button onClick={onClose}>cancel</button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-sky-600 px-4 py-2 text-white hover:bg-sky-800 w-2-p-2 rounded-md"
              >
                <div className="flex  justify-center items-center gap-1 hover:scale-110 ">
                  Submit <ArrowRight height={20} width={25} />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Task;
