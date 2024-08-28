package com.ems.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.User;
import com.ems.pojos.UserTodo;
import com.ems.services.IUserServices;
import com.ems.services.UserTodoServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class UserController {
	@Autowired
	UserTodoServices userTodoServices;
	@Autowired
	IUserServices userService;
	
	@GetMapping("/asigntasks")
	public List<UserTodo> AsignTasks (HttpServletRequest request){
		return userTodoServices.showEmployeeTodo(request.getUserPrincipal().getName());
		
	}
	@GetMapping("/assigntasks/{id}")
	public List<UserTodo> AsignedTasks(@PathVariable int id){
		System.out.println(id);
		return userTodoServices.getTodoByEmployee(id);
		
	}
	
	@PostMapping("/assign/{id}")
	public void Assign(@PathVariable int id,@RequestBody UserTodo task){
		System.out.println(id+"  "+task.getTodo());
		userTodoServices.assignTask(id,task);
	}
	
	@DeleteMapping("/deletetask/{id}")
	public void deleteTask(@PathVariable int id){
		userTodoServices.deleteTask(id);
	}
	
	@GetMapping("/nameaccess")
	public String accessName(HttpServletRequest request)
	{
		return userService.accessUsername(request.getUserPrincipal().getName());
	}
	
	@PutMapping("/updatetask")
	public ResponseEntity<?>updateTask(@RequestBody UserTodo task){
		return ResponseEntity.ok(userTodoServices.updateTask(task));
	}
	
	@GetMapping("/allemployees/{role}")
	public List<User>getEmployees(@PathVariable String role){
		return userService.getEmployees(role);
	}
	
	@GetMapping("/assignemployees/{id}")
	public List<User>getEmployees(@PathVariable int id){
		return userService.getEmployeesByEvent( id);
	}
	
	@GetMapping("/assignmanagers/{id}")
	public List<User>getManagers(@PathVariable int id){
		return userService.getManagersByEvent( id);
	}
	
	@DeleteMapping("/deleteemployee/{id}")
	public void deleteEmployee(@PathVariable int id){
		System.out.println(id);
		userService.deleteEmployee(id);	
	}
	
	@GetMapping("/viewprofile")
	public User viewProfile(HttpServletRequest request)
	{
		return userService.viewOwnDetails(request.getUserPrincipal().getName());
	}
	
}
