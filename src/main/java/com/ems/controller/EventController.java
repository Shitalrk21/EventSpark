package com.ems.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

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

import com.ems.dto.EventDTO;
import com.ems.jwt_utils.JwtUtils;
import com.ems.pojos.Event;
import com.ems.pojos.User;
import com.ems.services.IEventServices;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class EventController {
	
	@Autowired
	IEventServices eventServices;
	
	JwtUtils jwt;
	
	@PostMapping("/bookevent")
	public ResponseEntity<?> bookEvent(@Valid @RequestBody EventDTO event,HttpServletRequest request) {
	
	return ResponseEntity.ok(eventServices.registerEvent(event,request.getUserPrincipal().getName()));
	}
	
	@GetMapping("/updateevent/{id}")
	public Event getEventById(@PathVariable int id){
		System.out.println(id);
		System.out.println(eventServices.getById(id));
		return eventServices.getById(id);
	}
	@PutMapping("/assignemployee/{id}")
	public void assignEmployee(@PathVariable int id,@RequestBody User user){
		 eventServices.assignEmployee(id, user);
	}
	@PutMapping("/unassignemployee/{id}")
	public void unassignEmployee(@PathVariable int id,@RequestBody User user){
		eventServices.unassignEmployee(id, user);
	}
	@PostMapping("/eventinfo")
	public ResponseEntity<?> registerEvent(@Valid @RequestBody EventDTO eventdata,HttpServletRequest request){
		System.out.println(eventdata.toString());
		//System.out.println(media);
//		menuList.forEach((e)->System.out.println(e));
		return ResponseEntity.ok(eventServices.registerEvent(eventdata,request.getUserPrincipal().getName()));
	}
	@PutMapping("/eventinfo")
	public ResponseEntity<?> updateEvent(@Valid @RequestBody EventDTO eventdata,HttpServletRequest request){
		System.out.println(eventdata.toString());
		return ResponseEntity.ok(eventServices.updateEvent(eventdata,request.getUserPrincipal().getName()));
	}
	
	@GetMapping("/regevents")
	public ResponseEntity<?> getEvents(HttpServletRequest request){
		System.out.println(request.getUserPrincipal().getName());
		return ResponseEntity.ok(eventServices.getByUsers(request.getUserPrincipal().getName()));
	}
	
}
