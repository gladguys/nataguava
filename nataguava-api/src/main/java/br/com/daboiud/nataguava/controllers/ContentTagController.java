package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.ContentTag;
import br.com.daboiud.nataguava.services.ContentTagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content-tag")
public class ContentTagController {

    ContentTagService contentTagService;

    public ContentTagController(ContentTagService contentTagService) {
        this.contentTagService = contentTagService;
    }

    @PostMapping
    public ResponseEntity<ContentTag> create(@RequestBody ContentTag contentTag) {
        ContentTag savedContentTag;
        try {
            savedContentTag = this.contentTagService.createOrUpdate(contentTag);
            return ResponseEntity.ok(savedContentTag);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<ContentTag>> getAll() {
        try {
            List<ContentTag> contents = this.contentTagService.findAll();
            return ResponseEntity.ok(contents);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
