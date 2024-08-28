package com.ems.services;

import java.util.List;

import com.ems.pojos.Caters;

public interface ICatersServices {
	List<Caters> getAllCaters();
	void assignCaterer(int id,Caters cater);
	Caters addCaterer(Caters cater);
}

//ICatersServices is an interface that has methods for handling operations related to caterers (like adding or retrieving them).