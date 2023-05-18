import Course from "./component/Course/Course";
import {  courses } from './component/Data/Data';

const App = () => {

  return <Course courses={courses}  />
}

export default App