package br.com.daboiud.nataguava.security.jwt;

import java.io.Serializable;

public class JwtAuthenticationRequest implements Serializable {

	private static final long serialVersionUID = 1l;

	private String email;
	private String password;


	public JwtAuthenticationRequest() {
		super();
	}

	public JwtAuthenticationRequest(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
