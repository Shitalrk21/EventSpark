package com.ems.dto;

public class AuthenticationResponse {
	private final String jwt;
	private final String role;

	public AuthenticationResponse(String jwt,String role) {
		super();
		this.jwt = jwt;
		this.role=role;
	}
	public String getJwt() {
		return jwt;
	}
	public String getRole() {
		return role;
	}
	@Override
	public String toString() {
		return "AuthenticationResponse [jwt=" + jwt + ", role=" + role + "]";
	}
	
	
	
}
