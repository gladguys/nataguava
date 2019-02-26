package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.Company;
import br.com.daboiud.nataguava.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	@PostMapping
	public ResponseEntity<Company> create(@RequestBody Company company) {
		Company companyCreated = null;
		try {
			companyCreated = this.companyService.createOrUpdate(company);
			return ResponseEntity.ok(companyCreated);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}



}
