package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

	User findByEmail(String email);
}
