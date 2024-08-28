package com.ems.services;

import java.util.List;

import com.ems.dto.RegisterDTO;
import com.ems.pojos.User;

public interface IUserServices {
	public RegisterDTO registerUser(RegisterDTO request);
	public String accessUsername(String email);
	public List<User> getEmployees(String role);
	public void deleteEmployee(int id);
	public List<User> getEmployeesByEvent(int id);
	public List<User> getManagersByEvent(int id);
	public int validateEmailAndGenearateOtp(String email);
	public boolean changePassword(String email,String password);
	public User viewOwnDetails(String email);
	
}
