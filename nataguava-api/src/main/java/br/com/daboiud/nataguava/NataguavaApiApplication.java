package br.com.daboiud.nataguava;

import br.com.daboiud.nataguava.models.ProfileEnum;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.repositories.UserRepository;
import br.com.daboiud.nataguava.services.UserCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class NataguavaApiApplication {

    @Autowired
    private UserCompanyService userCompanyService;

    public static void main(String[] args) {
        SpringApplication.run(NataguavaApiApplication.class, args);

    }

    @Bean
    CommandLineRunner init(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args ->{
            initUsers(userRepository, passwordEncoder);
        };
    }

    private void initUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        User admin = new User();
        admin.setEmail("geosales@nataguava.com");
        admin.setPassword(passwordEncoder.encode("123456"));
        admin.setProfileEnum(ProfileEnum.ROLE_RECRUTER);

        User find = userRepository.findByEmail("geosales@nataguava.com");
        if(find == null) {
            userRepository.save(admin);
            UserCompany userCompany = new UserCompany();
            userCompany.setName("Geosales Tecnologia");
            userCompany.setDescription("uma empresa voltada para software de força de vendas");
            userCompany.setPhone("(85)997778765");
            userCompany.setUser(admin);

            userCompanyService.createOrUpdate(userCompany);
        }





    }


}
