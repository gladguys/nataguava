package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Person;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

	Person findByEmail(String email);

	Person createOrUpdate(Person person);

	Person findById(String id);

	void delete(String id);

	List<Person> findAll();
}
