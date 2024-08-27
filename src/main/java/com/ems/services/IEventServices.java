package com.ems.services;



import java.util.List;

import javax.mail.MessagingException;

import com.ems.dto.EventDTO;
import com.ems.pojos.Event;
import com.ems.pojos.User;

public interface IEventServices {
	EventDTO registerEvent(EventDTO event,String email);
	Event updateEvent(EventDTO event,String email);
	List<Event> getByUsers(String email);
	Event getById(int id);
	void assignEmployee(int id,User user);
	void unassignEmployee(int id,User user);
}
