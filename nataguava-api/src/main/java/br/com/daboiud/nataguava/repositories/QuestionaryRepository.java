package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Questionary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionaryRepository extends JpaRepository<Questionary, Long> {
}
