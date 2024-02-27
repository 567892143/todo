import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const [showPendingTasks, setShowPendingTasks] = useState(true);

  const handleClick = () => {
    const todoInput = document.getElementById("todo");
    const newTask = todoInput.value.trim();
    if (newTask === "") {
      alert("Please enter a task!");
    } else {
      setTasks(prevTasks => [...prevTasks, newTask]);
      todoInput.value = "";
    }
  };

  const handleMark = (index) => {
    const isConfirmed = window.confirm("Is the task completed?");
    if (isConfirmed) {
      const taskToComplete = tasks[index];
      setCompletedTasks(prevCompletedTasks => [...prevCompletedTasks, taskToComplete]);
      setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }
  };

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this task?");
    if (isConfirmed) {
      setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }
  };

  const handleDeleteCompleted = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this completed task?");
    if (isConfirmed) {
      setCompletedTasks(prevCompletedTasks => prevCompletedTasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 rounded-lg bg-slate-400 py-3 border-black border shadow-md border-5 mx-auto">
      <div className="bg-green-500 text-center py-3 flex flex-col">
        <h1 className="font-bold">Todo</h1>
        <input type="text" placeholder="to-do" id="todo" className="border-black border-2 mb-2" />
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold rounded"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      <div className="bg-slate-300 rounded-md  ">
        <h2 className="text-lg font-bold mt-4">
          My Tasks{" "}
          <button
            className="ml-2 bg-blue-700 text-white font-bold rounded px-3"
            onClick={() => setShowPendingTasks(!showPendingTasks)}
          >
            {showPendingTasks ? "Hide" : "Show"} Pending
          </button>
        </h2>
        {showPendingTasks && (
          <ul className="border-solid border-2 max-h-60 overflow-y-auto">
            {tasks.map((task, index) => (
              <li className="border-2 border-green-400" key={index}>
                {task}
                <button
                  className="flex justify-end bg-red-600 text-white font-bold hover:bg-red-800 px-2 rounded-md"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </button>
                <button
                  className="bg-green-600 text-white font-semibold rounded px-3"
                  onClick={() => handleMark(index)}
                >
                  mark as complete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2 className="text-lg font-bold mt-4">
          Completed Tasks{" "}
          <button
            className="ml-2 bg-blue-700 text-white font-bold rounded px-3"
            onClick={() => setShowCompletedTasks(!showCompletedTasks)}
          >
            {showCompletedTasks ? "Hide" : "Show"} Completed
          </button>
        </h2>
        {showCompletedTasks && (
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded-md border border-gray-300 mt-2">
                {task}
                <button
                  className="ml-2 bg-red-600 text-white font-bold hover:bg-red-800 px-2 rounded-md flex justify-end"
                  onClick={() => handleDeleteCompleted(index)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Todo;
