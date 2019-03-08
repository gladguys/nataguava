package br.com.daboiud.nataguava.models;

import lombok.Data;

@Data
public class CurrentUserRecruter {

	private String token;
	private UserCompany user;

	public CurrentUserRecruter(String token, UserCompany user) {
		this.token = token;
		this.user = user;
	}
}
