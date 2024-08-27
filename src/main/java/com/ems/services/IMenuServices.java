package com.ems.services;

import java.util.List;

import com.ems.pojos.Menu;

public interface IMenuServices {
	
	List<Menu>getAllMenu();
	List<Menu>getByCategoryAndSubCategory(String category,String subCategory);
	List<Menu>getByCategory(String category);
	List<Menu>getBySubCategory(String subCategory);
//	void submitMenu(List<Menu> list,String email);
	Menu addMenu(Menu menu); 

}
