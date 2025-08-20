import React, { useState } from "react";

export default function NestedInputBuilder() {
  const [inputs, setInputs] = useState([])

  const addSubInput = (tree, id) => {
    return tree.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          children: [
            ...node.children,
            { id: Date.now() + Math.random(), value: "", children: [] },
          ],
        };
      } else {
        return { ...node, children: addSubInput(node.children, id) };
      }
    });
  };

  const updateValue = (tree, id, newValue) => {
    return tree.map((node) => {
      if (node.id === id) {
        return { ...node, value: newValue };
      } else {
        return { ...node, children: updateValue(node.children, id, newValue) }
      }
    });
  };

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      { id: Date.now() + Math.random(), value: "", children: [] },
    ]);
  };

  const renderInputs = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id} style={{ marginLeft: "20px", marginTop: "10px" }}>
        <input
          type="text"
          value={node.value}
          onChange={(e) =>
            setInputs(updateValue(inputs, node.id, e.target.value))
          }
          placeholder="Enter value..."
        />
        <button
          onClick={() => setInputs(addSubInput(inputs, node.id))}
          style={{ marginLeft: "10px" }}
        >
          Add Sub Input
        </button>
        {renderInputs(node.children)}
      </div>
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nested Input Builder</h2>
      <button onClick={handleAddInput}>Add Input</button>
      <div style={{ marginTop: "20px" }}>{renderInputs(inputs)}</div>
    </div>
  );
}
