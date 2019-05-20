package br.com.daboiud.nataguava.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.daboiud.nataguava.models.Question;
import br.com.daboiud.nataguava.services.QuestionService;

@RestController
@RequestMapping(value = "/api/questions")
public class QuestionController {

	@Autowired
	private QuestionService questionService;

	@PostMapping
    public ResponseEntity<Question> save(@RequestBody Question question) {
        Question savedQuestion;
        try {
        	savedQuestion = this.questionService.save(question);
            return ResponseEntity.ok(savedQuestion);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
