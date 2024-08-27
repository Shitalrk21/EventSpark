package com.ems.custom_exception;

public class EventManagementException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public EventManagementException(String msg){
		super(msg);
	}
}
