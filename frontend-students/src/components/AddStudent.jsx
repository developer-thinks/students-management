import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Axios from 'axios'

const AddStudent = (props) => {
    // console.log(this.props.location.state);
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');

    const [update, setUpdate] = useState([]);

    const {id} = useParams()
    const nevigate = useNavigate()
    const location = useLocation();
    // console.log(location.state);

    useEffect(()=>{
        if(id){
        Axios.get(`http://localhost:8080/api/v1/students/${id}`)
        .then(response=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(err=>{
            console.log(err);
        })
    }
    },[])

    const saveStudent = async (e)=>{
        e.preventDefault()
        // const newStudent = {firstName,lastName,emailId, id}
        const newStudent = {firstName,lastName,emailId}
        // if(id){
        //     Axios.put('http://localhost:8080/api/v1/students', [newStudent])
        //     .then(response =>{
        //         console.log(response.data);
                
        //         nevigate('/')
        //     })
        // } else{
        //     Axios.post('http://localhost:8080/api/v1/students', [newStudent])
        //     .then(response=>{
        //     console.log(response.data);
        //     nevigate('/')
        //     }).catch(err=>{
        //     console.log(err);
        // })
        // }
        
        // location.state.students.push(newStudent);
        // console.log(location.state);
        // setUpdate(location.state);
        // await setUpdate(newStudent);
        update.push(newStudent);
        nevigate('/',{
            state :{
                update
            }
        })

    }


  return(
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5" style={{width:"24rem"}}>
            {
                id? <h3>update student</h3> : <h3>Add Student</h3>
            }
            <hr/>
            <form style={{width:"24rem"}}>
                <div className="form-group mb-4">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first Name"
                    />

                </div>
                <div className="form-group mb-4">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                    />

                </div>
                <div className="form-group mb-4">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="emailId"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div >
                    <button onClick={saveStudent} className="btn btn-success">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/" className='btn btn-primary'>Back to List</Link>
            
        </div>
    )
}

export default AddStudent