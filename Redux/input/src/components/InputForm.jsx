import React, { useState } from "react";

export function InputForm() {
  let [form, setForm] = useState({ firstName: "", lastName: "" });
  let [names, setNames] = useState([]);
  function handleChange(e) {
    let { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setNames((prev) => [...prev, form]);
    setForm({ firstName: "", lastName: "" });
  }
  return (
    <>
      <h3>Add Name</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            required
            placeholder="Enter first name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={form.lastName}
            required
            onChange={handleChange}
          />
          <button type="submit"> Add Name</button>
        </form>
      </div>
      <h4>Submitted Names:</h4>
      <ul>
        {names.map((n, idx) => (
          <li key={idx}>
            {n.firstName} {n.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}
