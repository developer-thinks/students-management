import { useEffect, useState } from "react"
import Axios from 'axios'
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    initializeStudentList()
  }, [])

  const initializeStudentList = ()=>{
    Axios.get('http://localhost:8080/api/v1/students').then(response=>{
      setStudents(response.data);
    })
    .catch(error=> console.log(error));
  }

  const handleDelete =(id)=>{
        Axios.delete(`http://localhost:8080/api/v1/students/${id}`)
        .then(response=>{
            console.log(response.data);
            initializeStudentList()
        })
    }

  return (
    <div className="container">
      <h3>list of students</h3>
      <div>
          <Link to="/add" className="btn btn-primary mb-2"> Add student</Link>
        <table className="table table-bordered table-striped" >
          <thead className="thead-dark">
            <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
            {
            students.map(student =>(
              <tr key={student.id} >
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.emailId }</td>
                <td>
                  <Link className="btn btn-info" to={`/students/update/${student.id}`}>Update</Link>
                  <button className="btn btn-danger ml-4" onClick={() => {
                    handleDelete(student.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList;