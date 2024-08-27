package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Caters;
import com.ems.services.ICatersServices;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class CatersController {
	@Autowired //In this case, it’s used to automatically give the CatersController class an instance of ICatersServices.
	private ICatersServices caterservices;
	
	@GetMapping("/caters")
	public List<Caters> getAllCaters(){
		return caterservices.getAllCaters();
	}
	@PostMapping("/addcater")
	public ResponseEntity<?> addCaterer(@RequestBody Caters cater){
		return ResponseEntity.ok(caterservices.addCaterer(cater));
	}
	
	@PutMapping("/assigncaterer/{id}")
	public void assignCater(@PathVariable int id,@RequestBody Caters cater) {
		caterservices.assignCaterer(id, cater);
	}
}
 