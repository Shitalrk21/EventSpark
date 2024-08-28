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
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Studio;
import com.ems.services.IStudioServices;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudioController {

	@Autowired
	private IStudioServices studioServices;
	
	@GetMapping("/studio")
	public List<Studio> getAllList(){
		return studioServices.getAllStudio();
	}
	
	@PostMapping("/addstudio")
	public ResponseEntity<?>addStudio(@RequestBody Studio studio){
		return ResponseEntity.ok(studioServices.addStudio(studio));
	}
	@PutMapping("/assignstudio/{id}")
	public void assignCater(@PathVariable int id,@RequestBody Studio studio) {
		studioServices.assignStudio(id, studio);
	}
}
