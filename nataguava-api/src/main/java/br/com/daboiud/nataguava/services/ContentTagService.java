package br.com.daboiud.nataguava.services;

import br.com.daboiud.nataguava.models.ContentTag;

import java.util.List;

public interface ContentTagService {

    ContentTag createOrUpdate(ContentTag contentTag);
    List<ContentTag> findAll();
}
