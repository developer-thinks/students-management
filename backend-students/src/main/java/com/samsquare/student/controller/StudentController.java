package com.samsquare.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.samsquare.student.model.Student;
import com.samsquare.student.repository.StudentRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//get all employees API :
	@GetMapping("/students")
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
	
	//create student API :
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}

	@GetMapping("/students/{id}")
	public Student getSingleStudent(@PathVariable Long id){
		return studentRepository.findById(id).get();
	}

	@PutMapping("/students")
	public Student updateStudentDetails(@RequestBody Student student){
		return studentRepository.save(student);
	}

	@DeleteMapping("/students/{id}")
	public void deleteEmployeeById(@PathVariable Long id){  //ResponseEntity<HttpStatus>
		studentRepository.deleteById(id);
//		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
