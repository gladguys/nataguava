package br.com.daboiud.nataguava.services.impl;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.daboiud.nataguava.models.Question;
import br.com.daboiud.nataguava.repositories.QuestionRepository;
import br.com.daboiud.nataguava.services.QuestionService;

public class QuestionServiceImpl implements QuestionService {

	@Autowired
    private QuestionRepository questionRepository;

	@Override
	public Question save(Question question) {
		return questionRepository.save(question);
	}
}
