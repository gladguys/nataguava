package br.com.daboiud.nataguava.models;

import lombok.Data;

@Data
public class CurrentUserCandidate {

	private String token;
	private Candidate user;

	public CurrentUserCandidate(String token, Candidate user) {
		this.token = token;
		this.user = user;
	}
}
