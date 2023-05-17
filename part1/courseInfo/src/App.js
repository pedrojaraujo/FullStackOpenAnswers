import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [ 
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10},
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
   
      { 
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content 
      part1={course.parts[0].name} 
      part2={course.parts[1].name} 
      part3={course.parts[2].name}
      
       />
      <Total
      exercises1={course.parts[0].exercises}
      exercises2={course.parts[1].exercises}
      exercises3={course.parts[2].exercises} 
      />
    </div>
  );
};

export default App;
