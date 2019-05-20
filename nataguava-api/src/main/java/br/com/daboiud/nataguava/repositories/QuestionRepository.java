package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.ContentTag;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.daboiud.nataguava.models.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long>, QuestionRepositoryCustom {

    List<Question> findByTag(ContentTag contentTag);
}
