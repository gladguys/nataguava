package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.Person;
import br.com.daboiud.nataguava.repositories.UserRepository;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;

	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public Person findByEmail(String email) {
		return this.userRepository.findByEmail(email);
	}

	@Override
	public Person createOrUpdate(Person user) {
		return this.userRepository.save(user);
	}

	@Override
	public Person findById(String id) {
		return this.userRepository.findById(id).get();
	}

	@Override
	public void delete(String id) {
		try {
			this.userRepository.delete(this.userRepository.findById(id).orElseThrow(Exception::new));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Person> findAll() {
		return this.userRepository.findAll();
	}
}
