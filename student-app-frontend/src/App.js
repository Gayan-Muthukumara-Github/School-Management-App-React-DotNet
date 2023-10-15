import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Navbar from "./components/Navbar";
import HomeNav from "./components/HomeNav";
import AllocateClassroomsScreen from "./screens/AllocateClassroomsDetails";
import AllocateSubjectsScreen from "./screens/AllocateSubjectsDetails";
import ClassroomScreen from "./screens/ClassroomDetails";
import StudentDetails from "./screens/StudentReport";
import StudentScreen from "./screens/StudentDetails";
import SubjectScreen from "./screens/SubjectDetails";
import TeacherScreen from "./screens/TeacherDetails";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomeNav/>
      <ToastContainer />
      <Container>
      <Routes>
        <Route path="/" element={<StudentScreen />} exact></Route>
        <Route path="/students" element={<StudentScreen />}></Route>
        <Route path="/teachers" element={<TeacherScreen />}></Route>
        <Route path="/subjects" element={<SubjectScreen />}></Route>
        <Route path="/classrooms" element={<ClassroomScreen />}></Route>
        <Route
          path="/allocate-subjects"
          element={<AllocateSubjectsScreen />}
        ></Route>
        <Route
          path="/allocate-classrooms"
          element={<AllocateClassroomsScreen />}
        ></Route>
        <Route
          path="/student-details"
          element={<StudentDetails />}
        ></Route>
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
