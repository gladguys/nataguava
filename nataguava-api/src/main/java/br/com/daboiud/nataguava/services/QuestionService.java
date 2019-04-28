package br.com.daboiud.nataguava.services;

import org.springframework.stereotype.Service;

import br.com.daboiud.nataguava.models.Question;

@Service
public interface QuestionService {

	Question save(Question question);
}
