package com.samsquare.student.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.samsquare.student.model.Student;
import com.samsquare.student.repository.StudentRepository;

import javax.transaction.Transactional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

	@Autowired
//	private StudentRepository studentRepository;

	private StudentServices studentServices;

	@PostMapping("/students")
	public List<Student> createStudent(@RequestBody List<Student> students ) {
		 return studentServices.saveStudents(students);
	}

}
