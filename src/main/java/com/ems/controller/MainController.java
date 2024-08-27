package com.ems.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.AuthenticationRequest;
import com.ems.dto.AuthenticationResponse;
import com.ems.dto.LoginDTO;
import com.ems.dto.RegisterDTO;
import com.ems.jwt_utils.JwtUtils;
import com.ems.services.IUserServices;
@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private IUserServices userServices;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	@PostMapping("/registration")
	public ResponseEntity<?> userRegistration(@Valid @RequestBody RegisterDTO request) {

		return new ResponseEntity<>(userServices.registerUser(request),HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDTO request) {
		System.out.println("in auth " + request);
		try {
			Authentication authenticate = authManager.authenticate
			(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));			
			System.out.println("auth success " + authenticate);
			return ResponseEntity.ok(new AuthenticationResponse(jwtUtils.generateJwtToken(authenticate),authenticate.getAuthorities().toString()));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("User authentication Failed", e);
		}
	}
	@GetMapping("/role")
	public ResponseEntity<?>getRole(HttpServletRequest request){
		if(request.isUserInRole("MANAGER"))
			return ResponseEntity.ok("MANAGER");
		if(request.isUserInRole("CUSTOMER"))
			return ResponseEntity.ok("CUSTOMER");
		if(request.isUserInRole("ADMIN"))
			return ResponseEntity.ok("ADMIN");
		return 	ResponseEntity.ok("EMPLOYEE");
	}
	
	@GetMapping("/generateotp/{email}")
	public ResponseEntity<?> generateOtp(@PathVariable String email){
		int randomNumber=userServices.validateEmailAndGenearateOtp(email);
		System.out.println(randomNumber);
		if(randomNumber!=-1)
		return ResponseEntity.ok(randomNumber);
		else
			return new ResponseEntity<>(HttpStatus.NON_AUTHORITATIVE_INFORMATION);
	}
	@PutMapping("/changepassword")
	public ResponseEntity<?> changePassword(@RequestBody AuthenticationRequest credentials ){
		if(userServices.changePassword(credentials.getEmail(),credentials.getPassword()))
		return ResponseEntity.ok("password chaange successfully");
		else
			return new ResponseEntity<>(HttpStatus.NON_AUTHORITATIVE_INFORMATION);
	}
}
