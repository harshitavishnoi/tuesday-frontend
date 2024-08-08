import React from "react";

function TaskCard({ taskData }) {
  return (
    <>
      <div className="w-52 h-36 border-2 border-black-400 shadow-md rounded-md m-2 p-2">
        {/* <h1 className="flex justify-center items-center text-2xl font-bold">{taskData.Title}</h1> */}
        <div className="flex flex-col text-justify text">
          <p>Title: {taskData?.Title}</p>
          <p >Person: {taskData?.Person}</p>
          <p>Status: {taskData?.Status}</p>
          <p>Data: {taskData?.Date}</p>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
