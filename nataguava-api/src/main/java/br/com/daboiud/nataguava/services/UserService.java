package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {

	User findByEmail(String email);

	User createOrUpdate(User user);

	User findById(String id);

	void delete(String id);

	List<User> findAll();
}
