package br.com.daboiud.nataguava.security.jwt;

import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class JwtUserFactory {

    private JwtUserFactory() {

    }

    public static JwtUser create(User user) {
        return new JwtUser( user.getId().toString(),
                user.getEmail(),
                user.getPassword(),
                mapToGrantedAuthorities(user.getProfileEnum())
        );
    }

    private static Collection<? extends GrantedAuthority> mapToGrantedAuthorities(ProfileEnum profile) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(profile.toString()));
        return authorities;
    }
}

