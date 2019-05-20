package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.ContentTag;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import br.com.daboiud.nataguava.models.Question;

import java.util.List;

@Component
public interface QuestionService {

	Question save(Question question);
	List<Question> findByContentTag(ContentTag contentTag);
}
