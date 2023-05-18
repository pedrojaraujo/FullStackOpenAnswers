import React from 'react';
import Part from '../Content/Part';

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <Part exercises={course.parts.map((part) => part.exercises)} />
        </div>
      ))}
    </div>
  );
};

export default Course;

