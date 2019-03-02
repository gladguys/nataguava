package br.com.daboiud.nataguava.models;

import lombok.Data;

@Data
public class CurrentUser {

	private String token;
	private User user;

	public CurrentUser(String token, User user) {
		this.token = token;
		this.user = user;

	}
}
