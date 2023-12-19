import React, { useId } from "react";
import { useState } from "react";
import Tasks from "./Tasks";



const EditableTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [editable, setEditable] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    const todoData = {
      id: Date.now(),
      todovalue: inputValue,
      editable: editable,
    };
    setTodo((prev) => [...prev, todoData]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    const restTodo = todo.filter((Id) => Id.id !== id);
    setTodo(restTodo);
  };


  return (
    <>
      <div className="w-[500px] h-[500px] m-auto top-[50px] border-gray-400 border-2 bg-white rounded-lg box-border relative">
        <div className="w-[440px] bg-white  box-border absolute m-8 rounded-lg">
          <form onSubmit={addTodo} className="flex justify-between">
            <input
              className="w-[320px] my-4 ml-2 p-2 border-blue-400 border-2 rounded-md"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="p-2 px-6 m-3 bg-blue-600 text-white rounded-lg my-4"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div className="absolute bg-white w-[440px] rounded-lg top-[150px] text-black m-8">
          <ul>
            {/* {todo.map(({todovalue,id})=>(
                        <li key={id}>{todovalue}</li>
                    ))}
                    {console.log(todo,"todo")} */}
            {todo.map(({ todovalue, id, editable }) => (
              <Tasks
                key={id}
                deleteTodo={deleteTodo}
                // editTodo={editTodo}
                todovalue={todovalue}
                id={id}
                // setEditable={setEditable}
                editable={editable}
                todo={todo}
                setTodo={setTodo}
              ></Tasks>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EditableTodo;
