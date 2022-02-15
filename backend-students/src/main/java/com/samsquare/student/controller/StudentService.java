package com.samsquare.student.controller;

import com.samsquare.student.model.Student;
import com.samsquare.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Transactional
    public void saveEmployees(List<Student> students){
        int size = students.size();

        List<Student> stud = new ArrayList<>();
        for(Student st : students){
            stud.add(st);
            while (size >0){
                studentRepository.saveAll(stud);
                stud.clear();
                size--;
            }
        }



    }

}
