package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Person;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin( origins = "*")

public class UserController {

    private UserService userService;
    private PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    //@PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Person> create(HttpServletRequest request, @RequestBody Person user, BindingResult bindingResult) {
        Person savedUser;
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            savedUser = userService.createOrUpdate(user);

            return ResponseEntity.ok(savedUser);
        } catch (DuplicateKeyException dke) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping
    //@PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Person> update(HttpServletRequest request, @RequestBody Person user, BindingResult bindingResult) {
        Person updatedUser;
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            updatedUser = userService.createOrUpdate(user);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    /*@GetMapping(value = "/username/{username}")
    public ResponseEntity<User> findByUsername(@PathVariable("username") String username) {
        User userFoundByUsername;
        try {
            userFoundByUsername = userService.findByUsername(username);
            if (userFoundByUsername == null) {
                return ResponseEntity.badRequest().body(null);
            }
            return ResponseEntity.ok(userFoundByUsername);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }*/

   /* @GetMapping(value = "/email/{email}/")
    public ResponseEntity<ReturnWrapper<User>> findByEmail(@PathVariable("email") String email) {
        ReturnWrapper<User> returnWrapper = new ReturnWrapper<>();

        try {
            User userFound = userService.findByEmail(email);
            if (userFound == null) {
                return null;
            }
            returnWrapper.setContent(userFound);
            return ResponseEntity.ok(returnWrapper);
        } catch (Exception e) {
            returnWrapper.getErrors().add(e.getMessage());
            return ResponseEntity.badRequest().body(returnWrapper);
        }
    }*/

   /* @GetMapping(value = "/term/{term}")
    public ResponseEntity<ReturnWrapper<List<User>>> findByFirstNameLikeOrLastNameLikeAllIgnoreCase(@PathVariable("term") String term) {
        ReturnWrapper<List<User>> returnWrapper = new ReturnWrapper<>();

        try {
            List<User> usersFound = userService.findByFirstNameLikeOrLastNameLikeAllIgnoreCase(term);
            if (usersFound == null) {
                return null;
            }
            returnWrapper.setContent(usersFound);
            return ResponseEntity.ok(returnWrapper);
        } catch (Exception e) {
            returnWrapper.getErrors().add(e.getMessage());
            return ResponseEntity.badRequest().body(returnWrapper);
        }
    }*/

    @GetMapping()
    public ResponseEntity<List<Person>> allUsers() {
        List<Person> users = new ArrayList<>();
        try {
            users = userService.findAll();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}

