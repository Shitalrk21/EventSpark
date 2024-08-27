//package com.ems.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ems.pojos.MediaRequirement;
//import com.ems.services.IMediaServices;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping
//public class MediaController {
//	@Autowired
//	IMediaServices mediaServices;
//	
//	@GetMapping("/media")
//	public List<MediaRequirement> GetAllMedia() {
//	return mediaServices.getAllMedia(); 	
//	}
//}
