package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
	@Override
	public User findByEmail(String email) {
		return null;
	}

	@Override
	public User createOrUpdate(User user) {
		return null;
	}

	@Override
	public User findById(String id) {
		return null;
	}

	@Override
	public void delete(String id) {

	}

	@Override
	public List<User> findAll() {
		return null;
	}
}
