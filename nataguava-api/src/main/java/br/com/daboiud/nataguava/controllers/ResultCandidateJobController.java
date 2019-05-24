package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.ResultCandidateJob;
import br.com.daboiud.nataguava.models.dtos.ResultCandidateJobDto;
import br.com.daboiud.nataguava.services.ResultCandidateJobService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/results")
public class ResultCandidateJobController {

    ResultCandidateJobService resultCandidateJobService;

    public ResultCandidateJobController(ResultCandidateJobService  resultCandidateJobService) {
        this.resultCandidateJobService = resultCandidateJobService;
    }

    @PostMapping
    public ResponseEntity<ResultCandidateJobDto> create(@RequestBody ResultCandidateJobDto dto) {

        ResultCandidateJob resultSaved =this.resultCandidateJobService.createOrUpdate(dto.toObject());
        return ResponseEntity.ok(resultSaved.toDTO());
    }
}
