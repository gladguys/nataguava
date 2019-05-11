package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Questionary;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.security.jwt.JwtTokenUtil;
import br.com.daboiud.nataguava.services.QuestionaryService;
import br.com.daboiud.nataguava.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/questionaries")
public class QuestionaryController {

    private QuestionaryService questionaryService;
    private JwtTokenUtil jwtTokenUtil;
    private UserService userService;

    public QuestionaryController(QuestionaryService questionaryService,
                                 JwtTokenUtil jwtTokenUtil,
                                 UserService userService) {
        this.questionaryService = questionaryService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
    }

    @GetMapping(value = "/{jobId}")
    public ResponseEntity<Questionary> generate(HttpServletRequest request, @PathVariable("jobId") Long jobId) throws Exception {

        String authToken = request.getHeader("Authorization");
        String usernameFromToken = jwtTokenUtil.getUsernameFromToken(authToken);
        User user = this.userService.findByEmail(usernameFromToken);

        Questionary questionary = this.questionaryService.generateByJobId(user, jobId);
        return  ResponseEntity.ok(questionary);
    }
}
