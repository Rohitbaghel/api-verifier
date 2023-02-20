import React, { useState, useEffect } from "react";
const StudentTable = ({ students }) => {
    console.log(students)
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Video URL</th>
          <th>Text Content</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.videoUrl}</td>
            <td>{student.textContent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
