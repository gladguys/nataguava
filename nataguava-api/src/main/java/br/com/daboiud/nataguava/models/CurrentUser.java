package br.com.daboiud.nataguava.models;

import lombok.Data;

@Data
public class CurrentUser {

	private String token;
	private Person person;

	public CurrentUser(String token, Person person) {
		this.token = token;
		this.person = person;

	}
}
