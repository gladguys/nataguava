package br.com.daboiud.nataguava.security.jwt;

import br.com.daboiud.nataguava.models.Person;
import br.com.daboiud.nataguava.models.ProfileEnum;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class JwtUserFactory {

    private JwtUserFactory() {

    }

    public static JwtUser create(Person person) {
        return new JwtUser(person.getId(), person.getEmail(), person.getPassword(), mapToGrantedAuthorities(person.getProfileEnum()));
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(ProfileEnum profileEnum) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(profileEnum.toString()));
        return authorities;
    }
}

