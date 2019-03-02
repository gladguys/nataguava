package br.com.daboiud.nataguava.controllers;

import br.com.daboiud.nataguava.models.UserCompany;
import br.com.daboiud.nataguava.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	@PostMapping
	public ResponseEntity<UserCompany> create(@RequestBody UserCompany userCompany) {
		UserCompany userCompanyCreated;
		try {
			userCompanyCreated = this.companyService.createOrUpdate(userCompany);
			return ResponseEntity.ok(userCompanyCreated);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}

	@GetMapping
	public ResponseEntity<List<UserCompany>> getAll() {
		try {
			List<UserCompany> companies = this.companyService.findAll();
			return ResponseEntity.ok(companies);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}

	}
}
