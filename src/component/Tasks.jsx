import React from "react";
 import { useState } from "react";

function Tasks({id,deleteTodo,todovalue,todo,setTodo}) {
    const [editable, setEditable] = useState(false);
    const [editedValue, setEditedValue] = useState("");
    const [taskvalue, setTaskvalue] = useState(todo.todovalue);
    const [todoData, setTodoData] = useState(todovalue);

const editTodo = (Id,Todovalue) => {
    todo.find(({id})=> id === Id) ? setEditable(true)  : ""
    setTaskvalue(Todovalue)
    
}


const savedata = (Id)=> {
    todo.find(({id})=> id === Id) ? setEditable(false) : ""
    const editedData = editedValue
    if(editedData !== null && editedData.trim() !== ''){
        setTodoData(editedData)
    }
}
    return (
      <li className="border-gray-400 border-2 flex p-3 justify-between mb-1 bg-blue-200 text-black rounded-lg">
        {editable ?
        <div className="flex flex-row justify-between w-full">
            <input
            className="w-[300px] rounded-2xl pl-4 "
            type="text" 
            value={editedValue} 
            onChange={(e)=>setEditedValue(e.target.value)}
            />

            <div className="cursor-pointer border bg-blue-400 hover:bg-blue-600 px-8 py-1 rounded-2xl" onClick={()=>savedata(id)}>save</div>
        </div>
        :
        <div className="w-full">
            <div className="flex flex-row justify-between w-full">
                <div>{todoData}</div>
                <div className="flex flex-row">
                    <div
                    className="cursor-pointer text-white bg-indigo-900 font-extrabold px-[10px] rounded-md py-1 hover:bg-indigo-500"
                    onClick={() => editTodo(id,todovalue)}
                    >
                    edit todo
                    </div>
                    <div
                    className="cursor-pointer text-white bg-red-500 hover:bg-red-600 font-extrabold px-[10px] rounded-md  py-1 ml-1 "
                    onClick={() => deleteTodo(id)}
                    >
                    X
                    </div>
                </div>
            </div>
        </div>}
        
      </li>
    );
  }
  export default Tasks