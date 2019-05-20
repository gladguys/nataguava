package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Question;

import java.util.List;


public interface QuestionRepositoryCustom {

    List<Question> getByTagContent(String tag, int quantity);
}
