package br.com.daboiud.nataguava.models;

public class CurrentUserAdmin {

    private String token;
    private User user;

    public CurrentUserAdmin(String token, User user) {
        this.token = token;
        this.user = user;
    }
}
