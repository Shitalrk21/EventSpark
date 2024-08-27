package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.UserTodo;

public interface UserTodoDao extends JpaRepository<UserTodo, Integer>{
	//List<UserTodo> findByUser(User user);
}
