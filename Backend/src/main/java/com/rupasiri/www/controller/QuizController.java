package com.rupasiri.www.controller;

import com.rupasiri.www.entity.Question;
import com.rupasiri.www.service.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    // insert question
    @PostMapping("/add")
    public Question addQuestion(@RequestBody Question question) {
        return quizService.addQuestion(question);
    }

    // fetch all questions
    @GetMapping("/all")
    public List<Question> getAllQuestions() {
        return quizService.getAllQuestions();
    }
}

