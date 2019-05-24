package br.com.daboiud.nataguava.repositories;

import br.com.daboiud.nataguava.models.Question;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Component
public class QuestionRepositoryImpl implements QuestionRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<Question> getByTagContent(String tag, int quantity) {

        StringBuilder sql = new StringBuilder();
        sql.append("SELECT * FROM question");
        sql.append("ORDER BY RAND()");
        sql.append("LIMIT = "+ quantity);

        List<Question> resultList = em.createNativeQuery(sql.toString(), Question.class)
                .getResultList();

        return resultList;
    }
}
