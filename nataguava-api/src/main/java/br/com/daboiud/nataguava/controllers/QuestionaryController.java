package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Candidate;
import br.com.daboiud.nataguava.models.Job;
import br.com.daboiud.nataguava.models.Questionary;
import br.com.daboiud.nataguava.models.User;
import br.com.daboiud.nataguava.security.jwt.JwtTokenUtil;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.JobService;
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
    private JobService jobService;
    private JwtTokenUtil jwtTokenUtil;
    private UserService userService;
    private CandidateService candidateService;

    public QuestionaryController(QuestionaryService questionaryService,
                                 JwtTokenUtil jwtTokenUtil,
                                 UserService userService,
                                 JobService jobService,
                                 CandidateService candidateService) {
        this.questionaryService = questionaryService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
        this.jobService = jobService;
        this.candidateService = candidateService;
    }

    @GetMapping(value = "/{jobId}")
    public ResponseEntity<Questionary> generate(HttpServletRequest request, @PathVariable("jobId") Long jobId) throws Exception {

        String authToken = request.getHeader("Authorization");
        String usernameFromToken = jwtTokenUtil.getUsernameFromToken(authToken);
        User user = this.userService.findByEmail(usernameFromToken);

        Candidate candidate = this.candidateService.findByUserId(user.getId());
        this.candidateService.registerJob(user.getId(), jobId);

        if (!this.questionaryService.hasTakenQuestionary(candidate.getId(), jobId)) {
            Questionary questionary = this.questionaryService.generateByJobId(user, jobId);
            return ResponseEntity.ok(questionary);
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping(value = "/simulado/{jobId}")
    public ResponseEntity<Questionary> generateSimulado(HttpServletRequest request, @PathVariable("jobId") Long jobId) throws Exception {

        String authToken = request.getHeader("Authorization");
        String usernameFromToken = jwtTokenUtil.getUsernameFromToken(authToken);
        User user = this.userService.findByEmail(usernameFromToken);

        Candidate candidate = this.candidateService.findByUserId(user.getId());

        Questionary questionary = this.questionaryService.generateByJobId(user, jobId);
        return ResponseEntity.ok(questionary);


    }

    @GetMapping(value = "/{jobId}/hasTaken")
    public ResponseEntity<Boolean> hasTaken(HttpServletRequest request, @PathVariable("jobId") Long jobId) throws Exception {

        String authToken = request.getHeader("Authorization");
        String usernameFromToken = jwtTokenUtil.getUsernameFromToken(authToken);
        User user = this.userService.findByEmail(usernameFromToken);

        Candidate candidate = this.candidateService.findByUserId(user.getId());

        if (this.questionaryService.hasTakenQuestionary(candidate.getId(), jobId)) {
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }
}
