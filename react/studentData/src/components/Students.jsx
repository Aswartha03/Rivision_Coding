import React, { useState } from "react";
import students from "../students";

export function StudentsData() {
  let [allStudents, setAllStudents] = useState(students);
  function handleMarks(idx) {
    allStudents = allStudents.map((student, i) =>
      idx == i ? { ...student, marks: student.marks + 1 } : student
    );
    setAllStudents(allStudents);
  }
  return (
    <>
      <div>
        <h3>All Students</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10,1fr)",
            gap: "10px",
          }}
        >
          {allStudents.length > 0 &&
            allStudents.map((student, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <p style={{ flex: 1, fontSize: "16px", fontWeight: 500 }}>
                  {student.name} - {student.marks}
                </p>
                <button
                  onClick={() => handleMarks(i)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    cursor: "pointer",
                    transition: "0.3s",
                    fontSize: "16px",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#45a049")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#4CAF50")
                  }
                >
                  +1
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
