import { useEffect, useState } from "react"
import Axios from 'axios'
import { Link, useNavigate, useLocation } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  // const [update,setUpdate]= useState([]);

  const nevigate = useNavigate();
 const location = useLocation();

  useEffect( ()=>{
    initializeStudentList()
    console.log(location.state);



    // console.log(location.state.update);
    // setStudents(location.state.update);
    // students.push(location.state.newStudent)
  }, [])

  const initializeStudentList = async ()=>{
    // Axios.get('http://localhost:8080/api/v1/students').then(response=>{
    //   console.log(response.data);
    //   setStudents(response.data);
    // })
    // .catch(error=> console.log(error));
    await setStudents(location.state.update)
  }

  const handleDelete =(id)=>{
        Axios.delete(`http://localhost:8080/api/v1/students/${id}`)
        .then(response=>{
            console.log(response.data);
            initializeStudentList()
        })
    }

  const handleAddStudent = ()=>{
      nevigate('/add', 
      // {
      //   state :{
      //     students
      //   }
      // }
      )
  }

  return (
    <div className="container">
      <h3>list of students</h3>
      <div>
          {/* <Link className="btn btn-primary mb-2" to={{
                    pathname :'/add',
                    data : {
                      updateStudents : students
                    }
                  }}>Add student</Link> */}
        <button onClick={handleAddStudent}>
          Add student
        </button>
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