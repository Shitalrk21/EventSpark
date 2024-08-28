package com.ems.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Venue;
import com.ems.services.IVenueServices;

@RestController
@CrossOrigin(origins = "http://localHost:3000")
@RequestMapping
public class VenueController {
	
	@Autowired
	private IVenueServices venueServices;
	
	@GetMapping("/venue")
	public List<Venue> getVenues(){
		return venueServices.getAllVenues(); 
	}
	
	@PostMapping("/addvenue")
	public ResponseEntity<?> addVenue(@Valid @RequestBody Venue venue) {
		return ResponseEntity.ok(venueServices.addVenue(venue));
	}
}
