package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Person, String> {

	Person findByEmail(String email);
}
