import React, { useState } from "react";
import axios  from 'axios';

export function AddTask() {
  let [form, setForm] = useState({ taskName: "", status: false });

  async function handleSubmit(event) {
    event.preventDefault()
    let response = await axios.post("http://localhost:3000/task/addtask",form)
    if(response.status == 201){
        alert("Task Added Succefull") 
        setForm({taskName:"",status:false})
    }else{
        alert("Error While adding the task") 
    }
  }
  function handleChange(e) {
    let { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div>
        Add Task
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="taskName"
            placeholder="Enter your task"
            value={form.taskName}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
