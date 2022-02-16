import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios'
import M from 'materialize-css'

const AddStudent = ({setUpdate}) => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');
    const {id} = useParams()
    const nevigate = useNavigate()

    useEffect(()=>{
        if(id){
        Axios.get(`http://localhost:8080/api/v1/students/${id}`)
        .then(response=>{
            setUpdate(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(err=>{
            console.log(err);
        })
    }
    },[])

    const saveStudent = (e)=>{
        e.preventDefault()
        const students = {firstName,lastName,emailId, id}
        if(id){
            Axios.put('http://localhost:8080/api/v1/students', [students])
            .then(response =>{
                console.log(response.data);
                M.toast({html: "saved successfully", classes:"#43a047 green darken-1"})
                nevigate('/')
            })
        } else{
            Axios.post('http://localhost:8080/api/v1/students', [students])
            .then(response=>{
            console.log(response.data);
            M.toast({html: "saved successful", classes:"#43a047 green darken-1"})
            nevigate('/')
            }).catch(err=>{
            console.log(err);
        })
        }
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