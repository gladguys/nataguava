package br.com.daboiud.nataguava.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.daboiud.nataguava.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
