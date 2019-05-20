package br.com.daboiud.nataguava.services.impl;

import br.com.daboiud.nataguava.models.ContentTag;
import br.com.daboiud.nataguava.repositories.ContentTagRepository;
import br.com.daboiud.nataguava.services.ContentTagService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentTagServiceImpl implements ContentTagService {

    ContentTagRepository contentTagRepository;

    ContentTagServiceImpl(ContentTagRepository contentTagRepository) {
        this.contentTagRepository = contentTagRepository;
    }

    @Override
    public ContentTag createOrUpdate(ContentTag contentTag) {
        return this.contentTagRepository.save(contentTag);
    }

    @Override
    public List<ContentTag> findAll() {
        return this.contentTagRepository.findAll();
    }
}
