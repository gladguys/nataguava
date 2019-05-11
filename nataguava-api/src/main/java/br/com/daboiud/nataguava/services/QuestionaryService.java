package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.Questionary;
import br.com.daboiud.nataguava.models.User;
import org.springframework.stereotype.Service;

public interface QuestionaryService {

    public Questionary generateByJobId(User user, Long jobId) throws Exception;
}
