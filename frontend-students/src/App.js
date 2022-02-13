import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from "./components/StudentList";
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = ()=> {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/students/update/:id" element={<AddStudent />} />
      </Routes>
    </Router>
  )
}

export default App
