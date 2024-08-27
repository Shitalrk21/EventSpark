package com.ems.services;

import java.util.List;

import com.ems.pojos.UserTodo;

public interface UserTodoServices {
 List<UserTodo> showEmployeeTodo(String email);
 List<UserTodo> getTodoByEmployee(int id);
 UserTodo updateTask(UserTodo task);
void assignTask(int id,UserTodo task);
void deleteTask(int id);
}
