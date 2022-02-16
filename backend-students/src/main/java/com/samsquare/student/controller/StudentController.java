package com.samsquare.student.controller;

import java.util.ArrayList;
import java.util.List;

import com.samsquare.student.exception.ResourceNotFoundException;
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
	public List<Student> createStudent(@RequestBody List<Student> students) {
		 return studentRepository.saveAll(students);
	}

	@GetMapping("/students/{id}")
	public Student getSingleStudent(@PathVariable Long id){
		return studentRepository.findById(id).get();
	}

	@PutMapping("/students")
	public void updateStudentDetails(@RequestBody List<Student> students){
		List<Student> temp = new ArrayList<>();
		for(Student student : students){
			Student updateStudent = studentRepository.findById(student.getId()).orElseThrow(() -> new ResourceNotFoundException("not found"+student.getId()));
			updateStudent.setFirstName(student.getFirstName());
			updateStudent.setLastName(student.getLastName());
			updateStudent.setEmailId(student.getEmailId());
			temp.add(updateStudent);
		}
		 studentRepository.saveAll(temp);
	}

	@DeleteMapping("/students/{id}")
	public void deleteEmployeeById(@PathVariable Long id){  //ResponseEntity<HttpStatus>
		studentRepository.deleteById(id);
//		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
