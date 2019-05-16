package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.*;
import br.com.daboiud.nataguava.repositories.QuestionaryRepository;
import br.com.daboiud.nataguava.services.CandidateService;
import br.com.daboiud.nataguava.services.JobService;
import br.com.daboiud.nataguava.services.QuestionService;
import br.com.daboiud.nataguava.services.QuestionaryService;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class QuestionaryServiceImpl implements QuestionaryService {

    private JobService jobService;
    private QuestionService questionService;
    private CandidateService candidateService;
    private QuestionaryRepository questionaryRepository;

    public QuestionaryServiceImpl(JobService jobService,
                                  QuestionService questionService,
                                  CandidateService candidateService,
                                  QuestionaryRepository questionaryRepository) {
        this.jobService = jobService;
        this.questionService = questionService;
        this.candidateService = candidateService;
        this.questionaryRepository = questionaryRepository;
    }

    @Override
    public Questionary generateByJobId(User user, Long jobId) throws Exception {
        Questionary questionary = new Questionary();
        Job job = this.jobService.findById(jobId).orElseThrow(Exception::new);

        Set<Question> questions = new HashSet<>();
        //generate questions
        Random random = new Random();
        job.getContents().forEach(c -> {
            ContentTag contentTag = c.getContentTag();
            List<Question> allQuestions = this.questionService.findByContentTag(contentTag);
            Collections.shuffle(allQuestions);
            questions.addAll(allQuestions.stream().limit(c.getQtQuestions()).collect(Collectors.toList()));
        });

        questionary.setQuestions(questions);
        questionary.setJob(job);
        questionary.setCandidate(this.candidateService.findByUserId(user.getId()));

        return this.questionaryRepository.save(questionary);
    }

    @Override
    public boolean hasTakenQuestionary(Long userId, Long jobId) {
        return this.questionaryRepository.hasTaken(userId, jobId) > 0;
    }
}
