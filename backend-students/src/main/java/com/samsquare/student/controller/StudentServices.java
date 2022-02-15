package com.samsquare.student.controller;

import com.samsquare.student.model.Student;
import com.samsquare.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.samsquare.student.model.Student;
import com.samsquare.student.repository.StudentRepository;

import javax.transaction.Transactional;

@Service
@CrossOrigin
public class StudentServices {

    @Autowired
    private StudentRepository studentRepository;

    @Transactional
    public List<Student> saveStudents(List<Student> students){
//        int size = students.size();
//        List<Student> temp = new ArrayList<>();
//
//        for (Student student : students){
//            temp.add(student);
//            studentRepository.saveAll(temp);
//        }
//        return  temp

        //or just
        return (List<Student>)studentRepository.saveAll(students) ;
    }

}
