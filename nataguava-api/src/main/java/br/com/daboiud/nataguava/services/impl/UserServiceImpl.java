package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.User;
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
	public User findByEmail(String email) {
		return this.userRepository.findByEmail(email);
	}

	@Override
	public User createOrUpdate(User user) {
		return this.userRepository.save(user);
	}

	@Override
	public User findById(String id) {
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
	public List<User> findAll() {
		return this.userRepository.findAll();
	}
}
