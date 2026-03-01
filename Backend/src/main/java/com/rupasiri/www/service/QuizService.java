package com.rupasiri.www.service;


import com.rupasiri.www.entity.Question;
import com.rupasiri.www.repository.QuestionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuestionRepository questionRepository;

    // add question
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    // get all questions
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
